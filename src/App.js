import React from "react";
import Dictionary from "./Dictionary";
import hero from "./hero.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="title">My Dictionary App</h1>
      
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
