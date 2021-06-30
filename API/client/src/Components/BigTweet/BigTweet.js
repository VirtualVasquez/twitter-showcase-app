import React from 'react';
import './BigTweet.css';
import ProfilePic from "../../Images/placeholder.jpg";

function BigTweet() {
    return (
        <div className="jumbotron">

            <div className="card big-tweet">
                
                <div className="card-photo">
                    <img src={ProfilePic} className="profile-photo" alt="profile"/>
                </div>
                
                <div className="card-body">

                    <div className="tweet-header">
                        <h5 className="card-title name">Card title </h5>
                        <h6 className=" mb-2 text-muted">&nbsp; Card subtitle - 1d</h6>
                    </div>

                        <p className="card-text">Lorem ipsum dolor sit amet et Lorem ipsum dolor sit amet et</p>
                    
                    <div className="icons">
                        <span className="span-row reply">
                            <span class="material-icons">
                            chat_bubble_outline
                            </span>
                            <p className="num-replies">
                                1
                            </p>    
                        </span>
                        <span className="span-row retweet">
                            <span class="material-icons">
                            autorenew
                            </span>
                            <p className="num-retweet">
                                1
                            </p>  
                        </span>
                        <span className="span-row likes">
                            <span class="material-icons">
                            favorite_border
                            </span>
                            <p className="num-likes">
                                1
                            </p> 
                        </span>
                        <span className="span-row share">
                            <span class="material-icons">
                            ios_share
                            </span>
                        </span>

 

                    </div>
                </div>

            </div>
            </div>

    )
  }

export default BigTweet;