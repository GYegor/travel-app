import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import { AppState, IRating } from '../interfaces';
import RatingPopup from './RatingPopup';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});


const SightRating: React.FC<{rating: IRating | { points: number}}> = ( { rating } ) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useSelector<AppState, AppState>(state => state);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  const [curPoints, setCurPoints] = useState<number | null>(rating!.points);

  useEffect(() => {
    setCurPoints(rating!.points);
  }, [ rating ])
  
  return (
    <div className={classes.root} onClick ={handleClick}>
      <Rating
        name="half-rating-read"
        value={curPoints}
        precision={0.5}
        onChange={(_e, newValue) => {
          setCurPoints(newValue);
        }} 
        readOnly={!(user && user.id)}
      />
      <RatingPopup isOpen={isOpen} setIsOpen={setIsOpen} rating={rating}/>
    </div>
  );
}

export default SightRating;