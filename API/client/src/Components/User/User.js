import React from 'react';
import ProfilePic from "../../Images/placeholder.jpg";
import './User.css';

const User = props => {
    return (
        <div className="card user" id={props.id}>

            <div className="card-photo">
                <img src={props.profile_image_url} className="profile-photo" alt="profile"/>
            </div>
                
            <div className="card-body">

                <div className="user-header">
                    <h4 className="card-title name">{props.name}</h4>
                    <h6 className=" mb-2 text-muted">@{props.username}</h6>
                </div>

            </div>

        </div>
    )
  }

export default User;