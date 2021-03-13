import React, { useEffect, useState } from 'react';
import { createMuiTheme,createStyles,makeStyles,Theme,ThemeProvider } from '@material-ui/core';
import './App.scss';
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { theme } from './mui-style';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Spacer from './components/Spacer';

// simple api request

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageWrapper: {
      display: 'flex',
      'flex-direction': 'column',

    },
    input: {
      display: 'none',
    },
  }),
);


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <Header />
        <div className={classes.pageWrapper}>
          <Switch>

            <Route path="/country">
              <CountryPage />
            </Route>

            <Route path="/">
              <HomePage />       
            </Route>

          </Switch>
        </div>

        <Spacer/>
        
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
