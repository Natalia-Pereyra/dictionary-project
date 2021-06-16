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
      <footer><small>Coded by Natalia Pereyra, open source on </small>
      <a href="https://github.com/Natalia-Pereyra/dictionary-project" target="_blank" rel="noreferrer">
       Github </a>
      and hosted on 
      <a href="https://vigilant-colden-04d5e2.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a> 
        
        </footer>
      </div>
    </div>
  );
}

export default App;
