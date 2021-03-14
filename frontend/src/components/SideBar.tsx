import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { theme } from '../mui-style';
import { AppState } from '../interfaces';
import DateTimeCard from './DateTimeCard';

const useStyles = makeStyles({
  root: {
    backgroundColor: fade(theme.palette.primary.light, 0.2),
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
  const classes = useStyles();

  const isSideBarOpened = useSelector<AppState>(state => state.isSideBarOpened);

  return (
    <div className={`${classes.root} ${isSideBarOpened ? classes.opened : ''}`}>
      <DateTimeCard />
    </div>
  )
}

export default SideBar;