import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Algambra from '../assets/images/algambra.jpg';
import { Image } from 'cloudinary-react';
import Box from '@material-ui/core/Box';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
});

const CountryCard: React.FC = () => {
  const classes = useStyles();

  const idImage: string = 'travelApp/algambra_un0ac7';

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box
          style={{ backgroundImage: `url('${cloudUrl}/${cloudName}/${idImage}')` }}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Algambra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to={`/country`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CountryCard;