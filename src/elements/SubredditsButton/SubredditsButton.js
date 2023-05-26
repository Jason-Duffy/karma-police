// React module imports.
import React from "react";
import { useDispatch } from 'react-redux';
// Local imports.
import { useThemeObject, useThemeColors } from "../../hooks/themeHooks";
import { toggleSubredditButtonState } from "../../redux/subredditButtonSlice";
// Style imports.
import './SubredditsButton.css';


const SubredditsButton = () => {

    // Get theme objects and variables
    const buttonStyle = useThemeObject("backgroundColor", "accent");
    const themeColors = useThemeColors();
    const buttonText = themeColors.primaryText;

    const dispatch = useDispatch();

    const toggleSubredditButton = () => {
        dispatch(toggleSubredditButtonState());
    };

    return (
        <div className="subreddits-button-container">
            <button
                id="subreddits-button"
                type="button"
                style={buttonStyle}
                onClick={toggleSubredditButton}
            >
                <span id="subreddits-button-label" style={{color: buttonText}}>Subreddits</span>
            </ button>
        </div>
    );
};

export default SubredditsButton;