import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="New York" />

       <footer>
         This project was coded by{" "}
         <a href="https://www.ruth.io/">
          Ruth Jean-Philippe
        </a>{" "}
        and is {" "}
        <a 
        href="https://github.com/RJP2024/react_weather_app">
          open-sourced on github
        </a>{" "}
          and{" "}
          <a
            href="https://lucent-alpaca-b48221.netlify.app">
            hosted on Netlify
        </a>
      </footer>
    </div>
  </div>
  );
}