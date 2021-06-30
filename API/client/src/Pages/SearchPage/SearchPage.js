import React from 'react';
import Search from '../../Components/Search/Search.js';
import Tweet from '../../Components/Tweet/Tweet.js';
import User from '../../Components/User/User.js';

import './SearchPage.css';


function SearchPage() {
    return (
        <div>
            <br></br>
            <Search />
            <br></br>
            <div className="container">
                <div className="row">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />

                </div>
            </div>
        </div>
    )
  }

export default SearchPage;