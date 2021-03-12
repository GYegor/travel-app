import React from 'react';
import { makeStyles } from '@material-ui/core';
import { theme } from '../mui-style';

const useStyles = makeStyles({
  root: {    
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1, 0), 
    opacity: 0.1,
    height: '100%',
    width: '200px',
    position: 'absolute',
    top: 0,
    left: 0
  },})

const SideBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>


    </div>
)
}

export default SideBar;