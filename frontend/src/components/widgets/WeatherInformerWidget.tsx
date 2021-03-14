import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, Language } from "../../interfaces";
import CardMedia from '@material-ui/core/CardMedia';

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
  cover: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 46,
    right: 84,
  }
}));
interface IWheather {
  weather: [
    {
      main: string;
      icon: string;
    }
  ]
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  }
  wind: {
    speed: number;
  },
  name: string;
}

const WeatherInformerWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);
  const api = {
    key: '1b49f5edda5dd68a6e6fa012bd990fb5',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  const [query, setQuery] = useState('Minsk');
  const [weather, setWeather] = useState<IWheather | null>(null);
  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=by`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      })
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Weather {weather?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {weather?.main.temp} °C
          <CardMedia
            className={classes.cover}
            image={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
            title={weather?.weather[0].main}
          />
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            feels like: {weather?.main.feels_like} °C
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            humidity: {weather?.main.humidity} %
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            wind speed: {weather?.wind.speed} m / s
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherInformerWidget;
