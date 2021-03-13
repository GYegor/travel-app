import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { IDateTimeCard, Language } from "../interfaces";

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

const DateTimeCard: React.FC<IDateTimeCard> = ({ lang, utcOffset }) => {
  const classes = useStyles();

  const enMonthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const ruMonthNames = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'
  ];
  const byMonthNames = [
    'Студзеня', 'Лютага', 'Сакавiка', 'Красавiка', 'Мая', 'Чэрвеня', 'Лiпеня', 'Жнiуня', 'Верасня', 'Кастрычнiка', 'Лiстапада', 'Снежня'
  ];

  const enDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const ruDayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const byDayNames = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];

  const dayLocales = {
    [Language.en]: enDayNames,
    [Language.ru]: ruDayNames,
    [Language.by]: byDayNames
  }
  const monthLocales = {
    [Language.en]: enMonthNames,
    [Language.ru]: ruMonthNames,
    [Language.by]: byMonthNames
  }

  const [currentDate, setCurrentDate] = useState<Date>(
    new Date(Date.now() + (60 * utcOffset + new Date().getTimezoneOffset()) * 1000 * 60)
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date(Date.now() + (60 * utcOffset + new Date().getTimezoneOffset()) * 1000 * 60));
    }, 1000);
    return () => clearInterval(timerId);
  });

  function getCurrentTime(): string {
    const minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    const seconds = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    return currentDate.getHours() + ':' + minutes + ':' + seconds;
  }

  function getCurrentDay(): string {
    return dayLocales[lang][currentDate.getDay()];
  }

  function getCurrentMonth(): string {
    return monthLocales[lang][currentDate.getMonth()];
  }
  function getCurrentYear() {
    return currentDate.getFullYear();
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {currentDate.getDate()} {getCurrentMonth()}, {getCurrentYear()}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {getCurrentDay()}
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
