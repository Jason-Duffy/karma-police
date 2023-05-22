import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/SubredditMenu.css';
import subredditList from '../data/subreddits.json';
import { setSubreddit, selectSubreddit } from "../redux/subredditSlice";


const SubredditMenu = () => {
    const dispatch = useDispatch();
    const currentSubreddit = useSelector(selectSubreddit); // get the current subreddit

    const changeSubreddit = (subreddit) => () => {
        dispatch(setSubreddit(subreddit));
    };


    return (
        <div className="subredditMenu">
            <p>Subreddit</p>
            <ul>
                {
                    subredditList.map((subreddit, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                onClick={changeSubreddit(subreddit)}
                                className={currentSubreddit === subreddit ? "active" : ""}
                            >
                                {subreddit}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SubredditMenu;