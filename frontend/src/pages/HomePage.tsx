import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { theme } from "../mui-style";
import { relative } from 'path';
import SideBar from '../components/SideBar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { shallowEqual, useSelector } from 'react-redux'
import { getDataFromBE } from '../actions/country-actions'
import Spacer from '../components/Spacer';


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

const HomePage: React.FC<any> = ( { countryList, getDataFromBE } ) => {
  const classes = useStyles();

  useEffect(() => {
    getDataFromBE('/api/countries?lang=by');
  }, [ ])

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
      <Spacer/>
    </>
  )
}

const mapStateToProps = ({ countryList }: any) => ({ countryList })

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  getDataFromBE: getDataFromBE
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);;
