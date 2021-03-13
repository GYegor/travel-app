import React from "react";
import '../styles/CountryCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Algambra from '../assets/images/algambra.jpg';
import { Image } from 'cloudinary-react';
import Box from '@material-ui/core/Box';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { ICountryCard } from "../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 200,
    transition: 'all 0.3s;',
    '&:hover': {
      'background-color': 'rgb(250, 255, 240)',
      transform: 'scale(1.1)',
    }
    
  },
  action: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  media: {
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

const CountryCard: React.FC<ICountryCard> = (props) => {
  const { name, capital, smallImageId } = props;
  const classes = useStyles();

  const idImage: string = 'travelApp/algambra_un0ac7';

  return (
    <Card className={classes.root}>
      <Link to={`/country`} className="card__link">
        <CardActionArea className={classes.action}>
          <Box
            style={{ backgroundImage: `url('${cloudUrl}/${cloudName}/image/upload/h_150/${smallImageId}')` }}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CountryCard;
