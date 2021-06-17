import React from 'react';
import './Tweet.css';
import ProfilePic from "../../Images/placeholder.jpg";

function Tweet() {
    return (
        <div className="col-md-6 tweet">
            <div className="card">
                
                    <img src={ProfilePic} className="profile-photo" alt="profile"/>
                
                <div className="card-body">

                    <div className="tweet-header">
                        <h5 className="card-title">Card title &nbsp;</h5>
                        <h6 className=" mb-2 text-muted">Card subtitle - 1d</h6>
                    </div>

                        <p className="card-text">Lorem ipsum dolor sit amet et Lorem ipsum dolor sit amet et</p>
                    
                    <div className="icons">
                        <span class="material-icons">
                        chat_bubble_outline
                        </span>
                        <p className="num-comments">
                            1
                        </p>                        
                        <span class="material-icons">
                        autorenew
                        </span>
                        <p className="num-retweet">
                            1
                        </p>  
                        <span class="material-icons">
                        favorite_border
                        </span>
                        <p className="num-likes">
                            1
                        </p>  
                        <span class="material-icons">
                        ios_share
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
  }

export default Tweet;