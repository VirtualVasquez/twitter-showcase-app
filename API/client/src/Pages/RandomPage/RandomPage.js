import React from 'react';
import User from '../../Components/User/User.js';
import BigTweet from '../../Components/BigTweet/BigTweet';


import './RandomPage.css';


function RandomPage() {
    return (
        <div className="container">
            <div className="row" id="random-blerb">
                <h3> See a random tweet from one of these fine five people.</h3>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-12 col-12" id="five-users-holder">
                    <div className="row">
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    </div>


                </div>
                <div className="col-md-8 col-sm-12 col-12" id="big-tweet-holder">
                    <BigTweet />
                </div>
            </div>
            
        </div>
    )
  }

export default RandomPage;