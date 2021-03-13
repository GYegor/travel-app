import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

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
      <p>
        {smth}
      </p>      
    </div>
  )
}

export default HomePage;