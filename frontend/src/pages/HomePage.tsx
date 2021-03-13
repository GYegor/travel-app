import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import { theme } from "../mui-style";
import SideBar from '../components/SideBar';

import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getDataFromBE } from '../actions/country-actions'
import Spacer from '../components/Spacer';
import { Language } from '../interfaces';
import { onUtcOffsetChanged } from '../actions/utc-offset-action'



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

const HomePage: React.FC<any> = ({ lang, countryList, getDataFromBE }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    getDataFromBE(`/api/countries?lang=${Language[lang]}`);
  }, [lang])

  useEffect(() => {
    if (countryList.length) {
      dispatch(onUtcOffsetChanged(countryList[0].localTimeDiff))
    }
  }, [countryList])

  return (
    <>
      <div className={classes.contentWrapper}>
        {countryList.map((card: any) => {
          return (
            <>
              <CountryCard {...card} key={card.id} />
            </>
          )
        })}
      </div>
      <SideBar />
      <Spacer />
    </>
  )
}

const mapStateToProps = ({ countryList, lang }: any) => ({ countryList, lang })

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  getDataFromBE: getDataFromBE
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);;
