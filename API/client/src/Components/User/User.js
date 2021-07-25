import React from 'react';
import ProfilePic from "../../Images/placeholder.jpg";
import './User.css';

const User = props => {
    return (
        <div className="card user author" id={props.id}>

            <div className="card-photo" id={props.id}>
                <img src={props.profile_image_url} className="profile-photo" alt="profile" id={props.id}/>
            </div>
                
            <div className="card-body" id={props.id}>

                <div className="user-header" id={props.id}>
                    <h4 className="card-title name" id={props.id}>{props.name}</h4>
                    <h6 className=" mb-2 text-muted" id={props.id}>@{props.username}</h6>
                </div>

            </div>

        </div>
    )
  }

export default User;