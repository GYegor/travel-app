import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';


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


  return ( 
    <div className="App">
      <header className="App-header">
        <h1>OUR TRAVEL-APP</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {smth}
        </p>
      </header>
    </div>
  );
}

export default App;
