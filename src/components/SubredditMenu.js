import React from "react";
import '../stylesheets/SubredditMenu.css';
import subredditList from '../data/subreddits.json';


const SubredditMenu = () => {
    return (
        <div className="subredditMenu">
            <p>Subreddit</p>
            <ul>
                {
                    subredditList.map((subreddit, i) => (
                        <li key={i}><button type="button">{subreddit}</button></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SubredditMenu;