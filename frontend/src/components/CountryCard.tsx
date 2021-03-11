import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ICardProps } from "../interfaces";
import { theme } from "../mui-style";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
    padding: theme.spacing(0.3, 0),
  },
  content: {
    backgroundColor: 'rgb(248, 255, 247)',
  },
  buttonCont: {
    justifyContent: 'center',
    backgroundColor: 'rgb(248, 255, 247)',
  }
});

const CountryCard: React.FC<ICardProps> = (props) => {
  const { country, capital, imageUrl } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={country}
        image={imageUrl}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {country}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {capital}
        </Typography>
      </CardContent>

      <CardActions className={classes.buttonCont}>
        <Link to={`/country`} className={classes.link}>
          <Button variant="contained" size="small" color="secondary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
