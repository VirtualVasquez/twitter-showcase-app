import React, { Component } from 'react';
import User from '../../Components/User/User.js';
import BigTweet from '../../Components/BigTweet/BigTweet';


import './RandomPage.css';

class RandomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            definedUsers: [
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
            ],
            tweets:[],
        };
        this.handleClick() = this.handleClick.bind(this);
        this.getOneUsersTweets() = this.getOneUsersTweets.bind(this);

    }
    getOneUsersTweets() {
        if (this.state.user_query) {
            axios.get(`api/Tweets/GetTenUserQueriedTweets/${this.state.user_query}`).then(result => {
                const response = result.data;
                this.setState({ tweets: response });
            })
            console.log(this.state.tweets)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row" id="random-blerb">
                    <h3> See a random tweet from one of these fine five people.</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-12" id="five-users-holder">
                        <div className="row">
                            {
                                this.state.definedUsers.map(function (user, index) {
                                    return (
                                        <User
                                            profile_image_url={user.profile_image_url}
                                            name={user.name}
                                            username={user.username}
                                            id={user.id}
                                        />
                                    )

                                })
                            }


                        </div>


                    </div>
                    <div className="col-md-8 col-sm-12 col-12" id="big-tweet-holder">
                        <BigTweet />
                    </div>
                </div>

            </div>
        )
    }
  }

export default RandomPage;