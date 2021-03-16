import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const SightRating: React.FC<{points: number}> = ( { points } ) => {
  const classes = useStyles();
  
  const [curPoints, setCurPoints] = React.useState<number | null>(null);

  useEffect(() => {
    setCurPoints(points);
  }, [ points ])
  
  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        value={curPoints}
        precision={0.5}
        onChange={(_e, newValue) => {
          setCurPoints(newValue);
        }} 
        readOnly={true}
      />
    </div>
  );
}

export default SightRating;