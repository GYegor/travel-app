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

interface IWheather {
  main: {
    temp: number,
    feels_like: number,
  }
}

const WeatherInformerWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);
  const api = {
    key: '1b49f5edda5dd68a6e6fa012bd990fb5',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  const [query, setQuery] = useState('Moscow');
  const [weather, setWeather] = useState<IWheather|null>(null);
  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
        console.log(result.main.temp);

      })
  }, [])

  // console.log(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Weather
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {weather?.main.temp} °C
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            feels like: {weather?.main.feels_like} °C
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherInformerWidget;
