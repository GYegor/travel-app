import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { onUtcOffsetChanged } from '../actions/utc-offset-action';
import { onCountryChanged } from '../actions/country-action';
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import '../styles/ImageGallery.scss';
import { makeStyles } from '@material-ui/core';
import { theme } from "../mui-style";
import { Loader } from "../components/Loader";
import { CountryAvatar } from "../components/CountryAvatar";
<<<<<<< HEAD
import { ICountryAvatarProps, ISightseeing, AppState, Language } from "../interfaces";
=======
import { ICountryAvatarProps, ISightseeing, AppState, Language, ICountryFull } from "../interfaces";
>>>>>>> 3534575adaf003fedec192ae798f3bf3174a959c
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { onWeatherParamsChanged } from "../actions/weather-params-action";

const useStyles = makeStyles({
  container: {
    height: '100%',
    overflowY: 'auto',
  },
  wrapper: {
    positon: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(0, 2, 3, 2)
  },
});

const CountryPage: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<Record<string, string | undefined>>();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);  
  const [avatar, setAvatar] = useState<ICountryAvatarProps | null>(null);
  
  const dispatch = useDispatch();

  const lang = useSelector<AppState, Language>(state => state.lang);  

  useEffect(() => {
    fetch(`/api/countries/${id}?lang=${Language[lang]}`)
      .then(response => response.json())
      .then((data: ICountryFull) => {
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

        setImages(getImagesFromData());
        setAvatar(getAvatarFromData());
<<<<<<< HEAD
        dispatch(onUtcOffsetChanged(data.utcOffset));
        dispatch(onCountryChanged(data));
=======
        dispatch(onUtcOffsetChanged(data.utcOffset))
        dispatch(onWeatherParamsChanged(data))
>>>>>>> 3534575adaf003fedec192ae798f3bf3174a959c
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
      </div>
    </div>
  );
};

export default CountryPage;