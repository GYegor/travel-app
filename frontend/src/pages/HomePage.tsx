import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import Turkey from "../assets/images/turkey.jpg";
import Spain from "../assets/images/spain.jpg";
import { theme } from "../mui-style";
import { relative } from 'path';
import SideBar from '../components/SideBar';

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
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: theme.spacing(4),
    columnGap: theme.spacing(3),
    padding: theme.spacing(3, 1.5)
  },
});

const fakeData = [
  {country: 'Turkey', capital: 'Ankara', imageUrl: Turkey},
  {country: 'Spain', capital: 'Madrid', imageUrl: Spain},
  {country: 'Poland', capital: 'Warsaw', imageUrl: Turkey},
  {country: 'Germany', capital: 'Berlin', imageUrl: Spain},
  {country: 'China', capital: 'Pekin', imageUrl: Turkey},
  {country: 'Italy', capital: 'Rome', imageUrl: Spain},
  {country: 'England', capital: 'London', imageUrl: Turkey},
  {country: 'Egypt', capital: 'Cairo', imageUrl: Spain},
]

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
      {fakeData.map((card, index) => {
        return (
          <>
          <SideBar />
          <CountryCard {...card} key={index} />
          </>
        )
      })}            
    </div>
  )
}

export default HomePage;