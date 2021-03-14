import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { theme } from '../mui-style';
import DateTimeCardWidget from './widgets/DateTimeCardWidget';
import { AppState } from '../interfaces';
import WeatherInformerWidget from './widgets/WeatherInformerWidget'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#77a2581a',
    padding: theme.spacing(2, 0),
    width: 300,
    position: 'absolute',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    top: 0,
    left: 0,
    bottom: 0,
    transition: 'all 400ms ease'
  },
  opened: {
    transform: 'translateX(-100%)'
  }
})

const SideBar: React.FC = () => {
  const isSideBarOpened = useSelector<AppState>(state => state.isSideBarOpened);


  const classes = useStyles();
  return (
    <div className={`${classes.root} ${isSideBarOpened ? classes.opened : ''}`}>
      <DateTimeCardWidget />
      <WeatherInformerWidget />
    </div>
  )
}

export default SideBar;