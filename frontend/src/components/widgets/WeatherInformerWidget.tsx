import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, Language } from "../../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 260,
    'border-radius': 12,
    color: 'white',
    'background-color': fade(theme.palette.primary.light, 0.7),

  },
  action: {
    '&:hover': {
      cursor: 'unset'
    }
  },
}));

const WeatherInformerWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);

  

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {lang as Language}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            uryurtiyt
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            yjtyiuyiu
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherInformerWidget;
