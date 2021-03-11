import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';

export async function getAllSmth() {
  const response = await fetch("/api", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '2vmin',
    'flex-direction': 'column',
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  const [ smth, setSmth ] = useState('');
  useEffect(() => {
    getAllSmth().then(res => {
      setSmth(res.smth)
    });
  }, [ smth ] )

  return (
    <div className={classes.root}>
      <CountryCard />       
      <p>
        {smth}
      </p>      
    </div>
  )
}

export default HomePage;