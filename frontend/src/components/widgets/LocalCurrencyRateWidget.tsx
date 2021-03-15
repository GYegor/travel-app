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
      cursor: 'unset',
    },
  },
}));

const TARGET_CURRENCY = 'EUR';

interface Irates {
  string: number; //так будет проблемно
  // динамически вставлять переменную тоже не очень.
}

const LocalCurrencyRateWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);
  const api = {
    key: '966802a9f2ca87f80cfe',
    base: 'https://free.currconv.com/api/v7/'
  }
  
  const [rates, setRates] = useState<any>(null);
  const [ratesEuro, setRatesEuro] = useState<any>(null);

  useEffect(() => {
    fetch(`${api.base}convert?q=USD_${symbolsOfRate.Spain},RUB_${symbolsOfRate.Spain}&compact=ultra&apiKey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setRates(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${api.base}convert?q=EUR_${symbolsOfRate.Turkey}&compact=ultra&apiKey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setRatesEuro(result);
      });
  }, []);


  console.log('rates', rates);
  console.log('ratesEuro', ratesEuro);

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
    [Language.en]: ['Currency rates', '1 USD', '1 EUR', '100 RUB'],
    [Language.ru]: ['Курсы валют', '1 доллар США', '1 евро', '100 российских рублей'],
    [Language.by]: ['Курсы валют', '1 долар ЗША', '1 еўра', '100 расійскіх рублёў']
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
      <Typography variant="h5" component="h3">
        {currencyRateInformation[lang as Language][0]}
      </Typography>
          <Typography variant="body1" component="h3">
           <span style={{color:"rgba(0, 0, 0, 0.54)"}}>1 USD = </span>{rates?.USD_EUR} EUR
          </Typography>
          <Typography variant="body1" component="h3">
          <span style={{color:"rgba(0, 0, 0, 0.54)"}}>1 EUR = </span>{symbolsOfRate.Spain==="EUR" ? 1 : ratesEuro?.EUR_EUR} EUR
          </Typography>
          <Typography variant="body1" component="h3">
          <span style={{color:"rgba(0, 0, 0, 0.54)"}}>100 RUB = </span>{(rates?.RUB_EUR*100).toFixed(4)} EUR
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LocalCurrencyRateWidget;
