import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.scss';
import HomePage from "./pages/HomePage";


// simple api request
export async function getAllSmth() {
  const response = await fetch("/api", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
}

function App() {
  const [ smth, setSmth ] = useState('');
  useEffect(() => {
    getAllSmth().then(res => {
        console.log(res)
      setSmth(res.smth)
    });
  }, [ smth ] )

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#558b2f',
      },
      secondary: {
        main: '#ffee58',
      }
    },
    spacing: 10, 
  })


  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <HomePage></HomePage>        
        <p>
          {smth}
        </p>      
      </div>
    </ThemeProvider>
  );
}

export default App;
