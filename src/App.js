import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import TLove from "./TLove.png";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={TLove} alt="trees" />
      
      <h6>
        For every 1000 words searched a tree is being planted!
      </h6>
      </header>
      <Dictionary defaultKeyword="" />
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
