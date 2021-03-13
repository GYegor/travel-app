import React from "react";
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

const DateTimeCard: React.FC<IDateTimeCard> = ({ lang }) => {
  const classes = useStyles();
  const currentDate = new Date();
  const enMonthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const ruMonthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'
  ];
  const byMonthNames = [
    'Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Май', 'Червень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань'
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
  function getCurrentTime(): string {
    return currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  }

  function getCurrentDay(): string {
    return dayLocales[lang][currentDate.getDay()];
  }

  function getCurrentMonth() {
    return monthLocales[lang][currentDate.getMonth()];
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {currentDate.getDate()} {getCurrentMonth()}, {getCurrentDay()}
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
