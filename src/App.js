import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <h1>Weather App</h1>
       <footer>
         This project was coded by{" "}
         <a href="https://www.ruth.io/">
          Ruth Jean-Philippe
        </a>{" "}
        and is {" "}
        <a 
        href="https://github.com/RJP2024/react_weather_app">
          open-sourced on github
        </a>
      </footer>
    </div>
  </div>
  );
}