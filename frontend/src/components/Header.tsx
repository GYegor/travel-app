import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../mui-style';
import Search from './Search';
import { Route } from "react-router-dom";
import Spacer from './Spacer';
import HomeBtn from './HomeBtn';
import SidePanel from './SidePanel'


const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <SidePanel/>
        <Typography variant="h6" className={classes.title}>
          Путешествуй
        </Typography>

        <Route exact path="/">
          <Search/>
        </Route>

        <Spacer />

        <HomeBtn />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>  
  )
}

export default Header;