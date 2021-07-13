import React from 'react';
import './Tweet.css';
import ProfilePic from "../../Images/placeholder.jpg";

const Tweet = props => {
    return (
        <div className="col-md-12 tweet">
            <div className="card">

                <div className="card-photo">
                    <img src={ProfilePic} className="profile-photo" alt="profile"/>
                </div>
                
                <div className="card-body">

                    <div className="tweet-header">
                        <h5 className="card-title name">{props.name}</h5>
                        <h6 className=" mb-2 text-muted handle">&nbsp; {props.username}</h6>
                    </div>

                    <p className="card-text">{props.text}</p>
                    
                    <div className="icons">
                        <span className="span-row reply">
                            <span className="material-icons">
                            chat_bubble_outline
                            </span>
                            <p className="num-replies">
                                {props.reply_count}
                            </p>  
                        </span>
                        <span className="span-row retweet">
                            <span className="material-icons">
                            autorenew
                            </span>
                            <p className="num-retweet">
                                {props.retweet_count}
                            </p>  
                        </span>
                        <span className="span-row likes">
                            <span className="material-icons">
                            favorite_border
                            </span>
                            <p className="num-likes">
                                {props.like_count}
                            </p>  
                        </span>
                        <span className="span-row share">
                            <span className="material-icons">
                            ios_share
                            </span>
                        </span>                       
                    </div>
                </div>

            </div>
        </div>
    )
  }

export default Tweet;