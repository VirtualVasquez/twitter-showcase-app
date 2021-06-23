import React from 'react';
import './Search.css';


function Search() {
    return (
        <div className="container">
            <div className="row">
                <div class="input-group mb-3 col-md-8 offset-md-2" id="search-form">
                    <input 
                        type="text" 
                        id="search-bar"
                        class="form-control" 
                        placeholder="Search Twitter" 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <button className="get-buttons" id="get-usernames">Get Usernames</button>
                </div>
                <div className="col-md-4">
                    <button className="get-buttons" id="get-tweets">Get Tweets</button>
                </div>
            </div>
        </div>
    );
  }

export default Search;