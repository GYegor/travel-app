import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { onUtcOffsetChanged } from '../actions/utc-offset-action';
import { useParams } from "react-router-dom";

import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import ReactImageGallery from "react-image-gallery";

import '../styles/ImageGallery.scss';
import ReactPlayer from 'react-player/youtube';

import { MapContainer, TileLayer, Marker, Polygon } from 'react-leaflet';
import polygons from '../data/polygon';
//import 'react-leaflet-fullscreen/dist/styles.css';
// import FullscreenControl from 'react-leaflet-fullscreen';

import { makeStyles } from '@material-ui/core';
import { theme } from "../mui-style";

import { Loader } from "../components/Loader";
import { CountryAvatar } from "../components/CountryAvatar";
import SideBar from '../components/SideBar';
import { ICountryAvatarProps, ISightseeing, AppState, Language } from "../interfaces";

import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';

const useStyles = makeStyles({
  container: {
    height: '100%',
    overflowY: 'auto',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(0, 2, 3, 2)
  },
  playerWrapper: {
    flex: '0 1 100%',
    margin: theme.spacing(3, 'auto', 0, 'auto'),
    position: 'relative',
    paddingTop: '56.25%',
  },
  reactPlayer: {     
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mapWrapper: {
    flex: '0 1 100%',
    margin: theme.spacing(3, 'auto', 0, 'auto'),
    position: 'relative',
    paddingTop: '56.25%',
  },
  leafletMap: {     
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

const CountryPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<Record<string, string | undefined>>();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);  
  const [avatar, setAvatar] = useState<ICountryAvatarProps | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<number[] | null>(null);
  const [geometry, setGeometry] = useState<any[][][] | any[][]>([]);
  
  const dispatch = useDispatch();

  const lang = useSelector<AppState, Language>(state => state.lang);  

  useEffect(() => {
    fetch(`/api/countries/${id}?lang=${Language[lang]}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);        
        const getImagesFromData = (): ReactImageGalleryItem[] => {
          return data.sights.map((elem: ISightseeing) => {
            return {
              original: `${cloudUrl}/${cloudName}/${elem.imageId}`,
              thumbnail: `${cloudUrl}/${cloudName}/image/upload/h_150/${elem.smallImageId}`,
              originalAlt: elem.name,
              description: elem.description,
            };
          });
        };
        
        const getAvatarFromData = (): ICountryAvatarProps => {
          return ({
            name: data.name,
            capital: data.capital,
            imageUrl: `${cloudUrl}/${cloudName}/${data.imageId}`,
            description: data.description,
          })
        }

        const getGeometryFromData = (): any[][][] | any[][] => {
          const polygon = polygons.find((elem) => elem.id === data.id);
          return polygon!.geometry;
        }

        setImages(getImagesFromData());
        setAvatar(getAvatarFromData());
        setVideoUrl(data.videoUrl);
        setCoordinates(data.coords);
        setGeometry(getGeometryFromData());
        dispatch(onUtcOffsetChanged(data.localTimeDiff))
        setLoading(false);                       
      })
  }, [id, lang])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        { loading && <Loader />}
        { avatar && <CountryAvatar {...avatar} />}        
        { images.length !== 0 && <ImageGallery 
            items={images}
            thumbnailPosition={"bottom"}
            infinite={false}
            lazyLoad={true}
            showBullets={true}
            slideDuration={700}
            slideInterval={2000}
          />
        }
        {videoUrl &&
          <div className={classes.playerWrapper}>
            <ReactPlayer 
              className={classes.reactPlayer}
              url={videoUrl}
              controls={true}
              width='100%'
              height='100%'                           
            />
          </div>
        }
        {coordinates && geometry &&
          <div className={classes.mapWrapper}>
            <MapContainer className={classes.leafletMap} center={[coordinates[0], coordinates[1]]} zoom={5} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker  position={[coordinates[0], coordinates[1]]}>       
              </Marker>
              <Polygon pathOptions={{ color: '#c9bc1f' }} positions={geometry} />
              {/*<FullscreenControl position="topright" />*/}      
            </MapContainer>
          </div>
        }
      </div>
    </div>
  );
};

export default CountryPage;
