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

const LocalCurrencyRateWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);
  const api = {
    key: '966802a9f2ca87f80cfe',
    base: 'https://free.currconv.com/api/v7/'
  }
  const [rates, setRates] = useState('');
  useEffect(() => {
    fetch(`${api.base}convert?q=USD_${symbolsOfRate.Italy},RUB_${symbolsOfRate.Italy}&compact=ultra&apiKey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setRates(result);
      })
  }, [])
  const symbolsOfRate = {
    Italy: 'EUR',
    Turkey: 'TRY',
    Spain: 'EUR',
    Poland: 'PLN',
    Germany: 'EUR',
    China: 'CNY',
    England: 'GBP',
    Egypt: 'EGP',
  }
  const currencyRateInformation = {
    [Language.en]: ['Currency rates', '1 USD', '1 euro', '100 Russian rubles'],
    [Language.ru]: ['Курсы валют',, '1 доллар США', '1 евро','100 российских рублей'],
    [Language.by]: ['Курсы валют', '1 долар ЗША', '1 еўра','100 расійскіх рублёў']
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
           {currencyRateInformation[lang as Language][0]}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
          {currencyRateInformation[lang as Language][1]} 
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {currencyRateInformation[lang as Language][2]}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {currencyRateInformation[lang as Language][3]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LocalCurrencyRateWidget;
