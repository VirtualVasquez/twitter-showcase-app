import React from 'react';
import Home from './Pages/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
