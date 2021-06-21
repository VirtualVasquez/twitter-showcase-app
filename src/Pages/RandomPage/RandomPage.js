import React from 'react';
import User from '../../Components/User/User.js';
import Tweet from '../../Components/Tweet/Tweet';


import './RandomPage.css';


function RandomPage() {
    return (
        <div className="container">
            <div className="row" id="random-blerb">
                <h3> See a random tweet from one of these fine five people.</h3>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
                <div className="col-md-8" id="random-tweet-holder">
                    <Tweet />
                </div>
            </div>
            
        </div>
    )
  }

export default RandomPage;