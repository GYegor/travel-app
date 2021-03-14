import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { theme } from "../mui-style";
import { AppState, ICountryCard, Language } from '../interfaces';
import { getDataFromBE } from '../actions/country-actions'
import { onUtcOffsetChanged } from '../actions/utc-offset-action'
import CountryCard from '../components/CountryCard';
import SideBar from '../components/SideBar';


const useStyles = makeStyles({
  root: {
    'min-height': '100%',
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center',
    rowGap: theme.spacing(4),
    columnGap: theme.spacing(3),
    padding: theme.spacing(3, 1.5)
  },
  contentWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: theme.spacing(4),
    columnGap: theme.spacing(3),
    padding: theme.spacing(3, 1.5)
  },
});

const HomePage: React.FC<any> = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { lang, countryList, filterString } = useSelector<AppState, AppState>(state => state);
  
  useEffect(() => {
    dispatch(getDataFromBE(`/api/countries?lang=${Language[lang]}`));
  }, [ lang ])

  useEffect(() => {
    if (countryList.length) {
      dispatch(onUtcOffsetChanged(countryList[0].localTimeDiff))
    }
  }, [ countryList ])

  const filteredCountryList = (filterString: string = '', list: ICountryCard[]) => {
    const normalisedString = filterString.toLowerCase().trim();
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(normalisedString) ||
        item.capital.toLowerCase().includes(normalisedString)
    );
  };

  return (
    <>
      <div className={classes.contentWrapper}>
        {filteredCountryList(filterString, countryList).map((card: any) => (
          <CountryCard {...card} key={card.smallImageId} />
        ))}
      </div>
      <SideBar />
    </>
  );
}

export default HomePage;
