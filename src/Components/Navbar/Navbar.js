import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header className="App-header">
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>T</strong></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <ul className="nav justify-content-end">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="#"> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">User Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Random Tweets</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
  }

export default Navbar;