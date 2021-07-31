import React, {Component} from 'react';
import axios from 'axios';
import Search from '../../Components/Search/Search.js';
import Tweet from '../../Components/Tweet/Tweet.js';
import User from '../../Components/User/User.js';


import './SearchPage.css';


class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_query:"",
            tweets: [],
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.populateTweetsData = this.populateTweetsData.bind(this);
    }

    handleChange(event) {
        this.setState({
            user_query: event.target.value
        })
    }

    populateTweetsData() {
        if (this.state.user_query) {
            axios.get(`api/Tweets/GetTenUserQueriedTweets/${this.state.user_query}`).then(result => {
                const response = result.data;
                this.setState({
                    tweets: response,
                    error: false
                });
            }).catch(() => {
                this.setState({
                    tweets: [],
                    error: true
                });
            }                
            )
        }
    }

    tweetsOrError() {
        if (this.state.tweets.length === 0 && this.state.error) {
            return this.renderError();
        }
        if(!this.state.error){
            return this.renderTweets()
        }
    }

    renderTweets(){
        return this.state.tweets.map((item) => (
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
        ))
    }
    renderError() {
        return (
            <div className="col-md-6 offset-md-3">
                <p id="error-message">Sorry, we weren't able to find anything. Please searching something else.</p>
            </div>
            )

    }
    render(){
        return(
            <div>
            <br></br>
                <Search
                    populateTweetsData={this.populateTweetsData}
                    handleChange={this.handleChange}
                />
            <br></br>
            <div className="container">
                <div className="row" id="tweets-or-error">
                    {this.tweetsOrError()}
                </div>
            </div>
        </div>
        )
    }
}


export default SearchPage;