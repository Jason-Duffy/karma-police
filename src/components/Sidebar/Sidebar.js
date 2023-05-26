// React module imports.
import React from "react";
// Local imports.
import { useThemeObject } from "../../hooks/themeHooks";
import SubredditList from "../../elements/SubredditList/SubredditList";
// Style imports.
import './Sidebar.css';


const SubredditMenu = () => {

    // Get theme objects and variables
    const background = useThemeObject("backgroundColor", "border");
    const primaryText = useThemeObject("color", "primaryText");

    return (
        <div className="Sidebar" style={background}>
            <p style={primaryText}>Subreddit</p>
            <SubredditList />
        </div>
    );
};

export default SubredditMenu;
