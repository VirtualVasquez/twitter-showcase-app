import React from 'react';
import './Home.css';
import tweetPhoto from "../../Images/tweet-tweet.jpg";

function Home() {
    return (
      <div className="container">
        <div className="row page-row" id="home-page-row">
         
          <div className="col-md-6 home-col" id="home-text">
            
            <div>
              <h1>
                Twitter ShowCase App
              </h1>
            </div>

            <div>
              <p>
              Stick it to the man (or bird)!
              </p>
              <p>
              Find a tweet or a Twitter without signing up for an account of your own.
              </p>
              <p>
              Don't know  what to look for? Have one randomly generated for you!
              </p>
            </div>

            <div>
              <br></br>
            </div>

          </div>
          <div className="col-md-6 home-col">
            <img src={tweetPhoto} id="tweet-photo" alt="tweet-tweet"/>
          </div>
        </div>

        
      </div>
    );
  }

export default Home;