import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, ICountryFull, Language } from "../../interfaces";

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

const LocalCurrencyRateWidget: React.FC = () => {
  const classes = useStyles();
  const { lang, country } = useSelector<AppState, AppState>(state => state);
  const api = {
    key: '1752709c76218c60e201',
    base: 'https://free.currconv.com/api/v7/'
  }

  const [rates, setRates] = useState<any>(null);
  const [ratesEuro, setRatesEuro] = useState<any>(null);

  useEffect(() => {
    if (!country) {
      return;
    }
    const localCurrency = (country as ICountryFull).currencyCode;

    console.log('get DATA by country', country);

    fetch(`${api.base}convert?q=EUR_${localCurrency}&compact=ultra&apiKey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setRatesEuro(result);
      });

    fetch(`${api.base}convert?q=USD_${localCurrency},RUB_${localCurrency}&compact=ultra&apiKey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setRates(result);
      });
  }, [country]);

  const currencyRateInformation = {
    [Language.en]: ['Currency rates'],
    [Language.ru]: ['Курсы валют'],
    [Language.by]: ['Курсы валют']
  }

  function getRate(currency: 'USD' | 'EUR' | 'RUB'): string {
    if (!country || !rates || !ratesEuro) {
      return '';
    }
    const index = currency + '_' + (country as ICountryFull).currencyCode;

    if (currency === 'EUR' && !ratesEuro[index]) {
      return '';
    }

    if (currency === 'EUR') {
      console.log('index', index, 'ratesEuro', ratesEuro);
      return ratesEuro[index].toFixed(2) + ' ' + (country as ICountryFull).currencyCode;
    }

    if (!rates[index]) {
      console.log('rates RUB or USD', rates);
      return '';
    }

    if (currency === 'RUB') {
      return (rates[index] * 100).toFixed(2) + ' ' + (country as ICountryFull).currencyCode;
    }
    return rates[index].toFixed(2) + ' ' + (country as ICountryFull).currencyCode;
  }
  return (
    country && (<Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography variant="h5" component="h3">
            {currencyRateInformation[lang as Language][0]}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>1 USD = </span>
            {getRate('USD')}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>1 EUR = </span>{getRate('EUR')}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>100 RUB = </span>{getRate('RUB')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
  );
};

export default LocalCurrencyRateWidget;
