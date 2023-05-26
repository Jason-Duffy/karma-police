// React module imports.
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// Local imports.
import subredditList from '../../assets/data/subreddits.json';
import { setSubreddit, selectSubreddit } from "../../redux/subredditSlice";
import { useThemeObject } from "../../hooks/themeHooks";
// Style imports.
import './SubredditList.css';

const SubredditList = () => {

    const secondaryText = useThemeObject("color", "secondaryText");
    const accentColor = useThemeObject("color", "accent");

    // Get and manage the current subreddit
    const currentSubreddit = useSelector(selectSubreddit);

    const dispatch = useDispatch();
    const changeSubreddit = (subreddit) => () => {
        dispatch(setSubreddit(subreddit));
    };

    return (
        <div>
            <ul id="sr-list" style={secondaryText}>
                {
                    subredditList.map((subreddit, i) => {
                        // Create a style object for the subreddit button
                        const buttonStyle = currentSubreddit === subreddit
                            ? { ...secondaryText, textDecoration: 'underline', fontWeight: 'bold', color: accentColor.color } // active style
                            : secondaryText; // default style

                        return (
                            <li id="sr-name" key={i}>
                                <button
                                    id="sr-button"
                                    type="button"
                                    style={buttonStyle}
                                    onClick={changeSubreddit(subreddit)}
                                >
                                    {subreddit}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default SubredditList;