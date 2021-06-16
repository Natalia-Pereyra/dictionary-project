import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import Theconsciousdictionary from "./Theconsciousdictionary.png";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={Theconsciousdictionary} alt="trees" />
      
      <h6>
        For every 100 words searched a tree is being planted
      </h6>
      </header>
      <Dictionary defaultKeyword="cedar" />
      <footer><small>coded by me</small></footer>
      </div>
    </div>
  );
}

export default App;
