import './App.css';
import React, { useState, useEffect } from 'react';
import getData from "./api/data";

function App() {
  useEffect(() => {
    getData()
  });

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
