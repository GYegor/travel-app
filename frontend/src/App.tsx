import React, { useEffect, useState } from 'react';
import { createMuiTheme,createStyles,makeStyles,Theme,ThemeProvider } from '@material-ui/core';
import './App.scss';
import HomePage from "./pages/HomePage";
import { theme } from './mui-style';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Spacer from './components/Spacer';
import { CloudinaryContext } from 'cloudinary-react';

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
    <CloudinaryContext cloudName="dshffjhdkjj">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className={classes.pageWrapper}>
            <Switch>

              <Route path="/country">
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
    </CloudinaryContext>
  );
}

export default App;
