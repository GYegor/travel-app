import React from 'react';
import { makeStyles } from '@material-ui/core';
import { theme } from '../mui-style';
import DateTimeCard from './DateTimeCard';

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1, 0),
    height: '100%',
    width: '240px',
    position: 'absolute',
    top: '69px',
    left: 0
  },
})

const SideBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DateTimeCard lang={Language.en} />
    </div>
  )
}

export default SideBar;