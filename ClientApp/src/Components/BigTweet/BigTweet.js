import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './BigTweet.css';

const BigTweet = props => {
    return (
        <div className="jumbotron">

            <div className="card big-tweet">
                
                <div className="card-photo">
                    <img src={props.profile_image_url} className="profile-photo" alt="profile"/>
                </div>
                
                <div className="card-body">

                    <div className="tweet-header">
                        <h5 className="card-title name">{props.name} </h5>
                        <h6 className=" mb-2 text-muted">&nbsp; @{props.username}</h6>
                        <h6 className=" mb-2 text-muted handle">&nbsp;-&nbsp;
                            <Moment fromNow>{props.created_at}</Moment>
                        </h6>
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

export default BigTweet;