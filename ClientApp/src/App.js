import React from 'react';
import Home from './Pages/Home/Home.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';
import RandomPage from './Pages/RandomPage/RandomPage.js';
import Navbar from './components/Navbar/Navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
        <div className="app">
          <div className="container">
            <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/search">
                  <SearchPage />
                </Route>
                <Route path="/random">
                  <RandomPage />
                </Route>
              </Switch>
           </div>
        </div>
    </Router>

  );
}

export default App;
