import React from 'react';
import './Navbar.css';


import {
    Link
} from "react-router-dom";
  
  

function Navbar() {
    return (
        <header className="app-header">
            <div id="logo-holder">
                <ul className="nav">
                    <Link to="/">
                        <li className="nav-item">
                            <span className="nav-link">
                                <strong>X</strong>
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div id="the-rest">
                <ul className="nav">

                    <Link to="/">
                        <li className="nav-item">
                            <span className="nav-link">
                                Home
                            </span>
                        </li>
                    </Link>
                    <Link to="/search">
                        <li className="nav-item" >
                            <span className="nav-link">
                                Search
                            </span>
                        </li>
                    </Link>
                    <Link to="/random">
                        <li className="nav-item">
                            <span className="nav-link">
                                Random
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
  }

export default Navbar;