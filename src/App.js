import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      The <span>Green</span> Dictionary
      <h2>
        For every 100 words searched a tree is being planted
      </h2>
      </header>
      <Dictionary />
      <footer><small>coded by me</small></footer>
      </div>
    </div>
  );
}

export default App;
