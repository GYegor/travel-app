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


const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuButton />
        <Typography variant="h6" className={classes.title}>
        П<span className={classes.titleSpan}>оехали</span>
        </Typography>
        <HomeBtn />
        <Route exact path="/">
          <SearchField />
        </Route>
        <Spacer />
        <LanguageSelect />
        <HomeBtn />
        <Entry />
      </Toolbar>
    </AppBar>
  )
}

export default Header;