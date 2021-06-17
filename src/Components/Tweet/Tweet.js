import React from 'react';
import './Tweet.css';
import ProfilePic from "../../Images/placeholder.jpg";

function Tweet() {
    return (
        <div className="col-md-6 tweet">
            <div className="card">
                
                {/* <div className="profile-photo-div"> */}
                    <img src={ProfilePic} className="profile-photo" alt="profile"/>
                {/* </div> */}
                
                <div className="card-body">

                    <div className="tweet-header">
                        <h5 className="card-title">Card title &nbsp;</h5>
                        <h6 className=" mb-2 text-muted">Card subtitle - 1d</h6>
                    </div>

                        <p className="card-text">Some quick example text to .</p>
                    
                    <div className="buttons">
                    <span class="material-icons">
                        home
                    </span>
                    </div>
                </div>

            </div>
        </div>
    )
  }

export default Tweet;