import React from 'react';
import ProfilePic from "../../Images/placeholder.jpg";
import './User.css';

function User() {
    return (
        <div className="card user">

            <div className="card-photo">
                <img src={ProfilePic} className="profile-photo" alt="profile"/>
            </div>
                
            <div className="card-body">

                <div className="user-header">
                    <h4 className="card-title">Username</h4>
                    <h6 className=" mb-2 text-muted">@Username</h6>
                </div>

            </div>

        </div>
    )
  }

export default User;