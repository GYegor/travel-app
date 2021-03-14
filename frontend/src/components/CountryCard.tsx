import React from "react";
import '../styles/CountryCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { ICountryCard } from "../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 400,
    width: 300,
    'border-radius': 12,
    transition: 'all 0.3s;',
    '&:hover': {
      transform: 'scale(1.1)',
      'background-color': 'rgb(250, 255, 240)',
    }
    
  },
  action: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  media: {
    height: 180,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

const CountryCard: React.FC<ICountryCard> = (props) => {
  const { name, capital, smallImageId, id } = props;
  const classes = useStyles();  

  return (
    <Card className={classes.root}>
      <Link to={`/country/${id}`} className="card__link">
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
