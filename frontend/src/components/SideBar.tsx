import React from 'react';
import { makeStyles } from '@material-ui/core';
import { theme } from '../mui-style';
import DateTimeCard from './DateTimeCard';
import { Language } from '../interfaces';

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1, 0),
    width: '240px',
    opacity: 0.1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
})

const SideBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DateTimeCard />
    </div>
  )
}

export default SideBar;