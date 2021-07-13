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
            tweets:[],
        };
    }

    componentDidMount(){
        this.populateTweetsData();
    }

    populateTweetsData(){
        axios.get("api/Tweets/GetTweets").then(result => {
            const response = result.data;
            this.setState({tweets: response});
        })
    }

    renderTweets(){
        return this.state.tweets.map((item) => (
            <Tweet 
                key={item.id}
                created_at={item.created_at}
                name={item.name}
                username={item.username}
                text={item.text}
                reply_count={item.reply_count}
                retweet_count={item.retweet_count}
                like_count= {item.like_count}
            />
        ))
    }
    render(){
        console.log(this.state.tweets)
        return(
            <div>
            <br></br>
            <Search />
            <br></br>
            <div className="container">
                <div className="row">
                    {this.renderTweets()}
                </div>
            </div>
        </div>
        )
    }
}


export default SearchPage;