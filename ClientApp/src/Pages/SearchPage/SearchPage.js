import React, { useState } from 'react';
import axios from 'axios';
import Search from '../../components/Search/Search.js';
import Tweet from '../../components/Tweet/Tweet.js';
import './SearchPage.css';

const SearchPage = () => {
    const [userQuery, setUserQuery] = useState("");
    const [tweets, setTweets] = useState([]);
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setUserQuery(event.target.value);
    };

    const populateTweetsData = () => {
        if (userQuery) {
            axios.get(`api/Tweets/GetTenUserQueriedTweets/${userQuery}`)
                .then(result => {
                    const response = result.data;
                    setTweets(response);
                    setError(false);
                })
                .catch(() => {
                    setTweets([]);
                    setError(true);
                });
        }
    };

    const renderTweets = () => {
        return tweets.map((item) => (
            <Tweet
                key={item.id}
                created_at={item.created_at}
                profile_image_url={item.profile_image_url}
                name={item.name}
                username={item.username}
                text={item.text}
                reply_count={item.public_metrics[0].reply_count}
                retweet_count={item.public_metrics[0].retweet_count}
                like_count={item.public_metrics[0].like_count}
            />
        ));
    };

    const renderError = () => {
        return (
            <div className="col-md-6 offset-md-3">
                <p id="error-message">Sorry, we weren't able to find anything. Please try searching something else.</p>
            </div>
        );
    };

    const tweetsOrError = () => {
        if (tweets.length === 0 && error) {
            return renderError();
        }
        if (!error) {
            return renderTweets();
        }
    };

    return (
        <div>
            <br />
            <Search
                populateTweetsData={populateTweetsData}
                handleChange={handleChange}
            />
            <br />
            <div className="container">
                <div className="row" id="tweets-or-error">
                    {tweetsOrError()}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
