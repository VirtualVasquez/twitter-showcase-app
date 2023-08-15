import React, { useState } from 'react';
import axios from 'axios';
import User from '../../components/User/User.js';
import BigTweet from '../../components/BigTweet/BigTweet';
import './RandomPage.css';

function RandomPage() {
    const [definedUsers] = useState([
        {
            "username": "Grand__Lotus",
            "name": "Iroh",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1308380991329837056/juixbRHf_normal.jpg",
            "id": "1308380759745597440"
        },
        {
            "username": "sonic_hedgehog",
            "id": "19609162",
            "profile_image_url": "https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru__normal.png",
            "name": "Sonic the Hedgehog"
        },
        {
            "name": "JayzTwoCents",
            "username": "JayzTwoCents",
            "id": "431947388",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1294090704298192896/TpKq90IJ_normal.jpg"
        },
        {
            "profile_image_url": "https://pbs.twimg.com/profile_images/1034493707553140736/cDlQGimm_normal.jpg",
            "id": "403614288",
            "username": "LinusTech",
            "name": "Linus Tech Tips"
        },
        {
            "id": "1450537070",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1347958805217247232/pLGdF0x__normal.jpg",
            "name": "insaneintherainmusic",
            "username": "insanerainmusic"
        }
    ])
    //    const [tweets, setTweets] = useState([]); //might not need this at all
    const [oneTweet, setOneTweet] = useState(null);

    function getOneUsersTweets(id) {
        axios.get(`api/tweets/GetOneAuthorsTweets/${id}`).then(result => {
            const response = result.data;
            var randomIndex = Math.floor(Math.random() * 11);
            //setTweets(response); //might not need this at all
            setOneTweet(response[randomIndex]);
            console.log(oneTweet);
        })
    }
    function renderOneTweet() {
        if (oneTweet) {
            let item = oneTweet;
            return (<BigTweet
                key={item.id}
                created_at={item.created_at}
                profile_image_url={item.profile_image_url}
                name={item.name}
                username={item.username}
                text={item.text}
                reply_count={item.public_metrics[0].reply_count}
                retweet_count={item.public_metrics[0].retweet_count}
                like_count={item.public_metrics[0].like_count}
            />);
        }
    }
    return (
        <div className="container">
            <div className="row" id="random-blerb">
                <h3> See a random tweet from one of these fine five people.</h3>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-12 col-12" id="five-users-holder">
                    <div className="row">
                        {
                            definedUsers.map(function (user, index) {
                                return (
                                    <User
                                        key={user.id}
                                        profile_image_url={user.profile_image_url}
                                        name={user.name}
                                        username={user.username}
                                        id={user.id}
                                        onClick={() => getOneUsersTweets(user.id)}
                                    />
                                )

                            })
                        }
                    </div>
                </div>
                <div className="col-md-8 col-sm-12 col-12" id="big-tweet-holder">
                    {
                        renderOneTweet()
                    }
                </div>
            </div>

        </div>
    )
}
export default RandomPage;