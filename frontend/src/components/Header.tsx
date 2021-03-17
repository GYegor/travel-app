import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../mui-style';
import Spacer from './Spacer';
import HomeBtn from './HomeBtn';
import LanguageSelect from './LanguageSelect';
import MenuButton from './MenuButton';
import SearchField from './SearchField';
import Entry from './Entry';
import LogOut from './LogOut';
import { useSelector } from "react-redux";
import { AppState, IUser } from '../interfaces';
import User from './User';

const Header: React.FC = () => {
  const classes = useStyles();
  const { lang, user } = useSelector<AppState, AppState>(state => state);
  const firstLetter: Array<string> = ['L', 'П', 'П'];
  const tittle: Array<string> = ["et's go", 'оехали', 'аехалі'];

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuButton />
        <Typography variant="h6" className={classes.title}>
        {firstLetter[lang - 1]}<span className={classes.titleSpan}>{tittle[lang - 1]}</span>
        </Typography>
        <Route exact path="/">
          <SearchField />
        </Route>
        <Spacer />
        <LanguageSelect />
        <HomeBtn />
        {
          user ?
            <>
              <User />
              <LogOut />
            </>
            :
            <Entry />
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header;