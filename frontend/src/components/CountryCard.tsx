import React from "react";
import '../styles/CountryCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Algambra from '../assets/images/algambra.jpg';
import { Image } from 'cloudinary-react';
import Box from '@material-ui/core/Box';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { ICardProps } from "../interfaces";
import { theme } from "../mui-style";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
});

const CountryCard: React.FC<ICardProps> = (props) => {
  const { country, capital, imageUrl } = props;
  const classes = useStyles();

  const idImage: string = 'travelApp/algambra_un0ac7';

  return (
    <Card className={classes.root}>
      <Link to={`/country`} className="card__link">
        <CardActionArea className="card">
          <Box
            style={{ backgroundImage: `url('${cloudUrl}/${cloudName}/image/upload/h_150/${idImage}')` }}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {country}
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
