import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { IDateTimeCard } from "../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 200,
    transition: 'all 0.3s;',
    '&:hover': {
      'background-color': 'rgb(250, 255, 240)',
      transform: 'scale(1.1)',
    }
  },
  action: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
}));

const DateTimeCard: React.FC<IDateTimeCard> = ({ lang }) => {
  const classes = useStyles();
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  function getCurrentTime(): string {
    return currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {currentDate.getDate()} {monthNames[currentDate.getMonth()]}, {dayNames[currentDate.getDay()]}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {getCurrentTime()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DateTimeCard;
