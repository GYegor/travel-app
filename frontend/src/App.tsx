import React from 'react';
import { createStyles,makeStyles,Theme,ThemeProvider } from '@material-ui/core';
import './App.scss';
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { theme } from './mui-style';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

// simple api request
import { CloudinaryContext } from 'cloudinary-react';
import cloudName from './constants/cloudName';
import SideBar from './components/SideBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'height': '100%',
      display: 'flex',
      'flex-direction': 'column'
    },
    pageWrapper: {
      overflow: 'hidden',
      position: 'relative',
      height: 'calc(100% - 162px)'
    },
    input: {
      display: 'none',
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <CloudinaryContext cloudName={cloudName} className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className={classes.pageWrapper}>
            <Switch>

              <Route path="/country/:id">
                <CountryPage />
                <SideBar />     
              </Route>

              <Route path="/">
                <HomePage />
              </Route>

            </Switch>

          </div>


          <Footer />
        </Router>
      </ThemeProvider>
    </CloudinaryContext>
  );
}

export default App;
