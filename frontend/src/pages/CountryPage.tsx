import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import SidePanel from '../components/SidePanel';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    'flex-direction': 'column',
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  const [ smth, setSmth ] = useState('');
  
  return (
    <div className={classes.root}>
      <SidePanel />       
      <p>
        {smth}
      </p>      
    </div>
  )
}

export default HomePage;