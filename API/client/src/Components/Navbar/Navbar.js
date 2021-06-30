import React from 'react';
import './Navbar.css';
import TwitterLogo from "../../Images/twitter-logo.png";


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
                            <a 
                                className="nav-link"
                                href="#">
                                    <strong>T</strong>
                            </a>
                        </li>
                        </Link>
                    </ul>
                    </div>
                    <div id="the-rest">
                    <ul className="nav">
                        
                        <Link to="/">
                        <li className="nav-item">
                            <a 
                            className="nav-link"
                            href="#"> 
                                Home
                            </a>
                        </li>
                        </Link>
                        <Link to="/search">
                        <li className="nav-item" >
                            <a 
                                className="nav-link" 
                                href="#">
                                    Search
                            </a>
                        </li>
                        </Link>
                        <Link to="/random">
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#">
                                    Random
                            </a>
                        </li>
                        </Link>
                    </ul>
                    </div>

        </header>
    );
  }

export default Navbar;