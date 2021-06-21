import React from 'react';
import Home from './Pages/Home/Home.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';
import RandomPage from './Pages/RandomPage/RandomPage.js';
import Navbar from './Components/Navbar/Navbar.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {/* <Home /> */}
        {/* <SearchPage /> */}
        <RandomPage />
      </div>
    </div>
  );
}

export default App;
