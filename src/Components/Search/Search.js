import React from 'react';
import './Search.css';


function Search() {
    return (
        <div className="container">
            <div className="row">
                <div class="input-group mb-3 col-md-8 offset-md-2">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <button className="get-button">Get Usernames</button>
                </div>
                <div className="col-md-4">
                    <button className="get-button">Get Tweets</button>
                </div>
            </div>
        </div>
    );
  }

export default Search;