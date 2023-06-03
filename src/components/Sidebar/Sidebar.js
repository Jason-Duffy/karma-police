// React module imports.
import React from "react";
// Local imports.
import { useThemeObject } from "../../hooks/themeHooks";
import SubredditList from "../../elements/SubredditList/SubredditList";
import Sort from "../Header/Sort/Sort";
import ArrestsList from "../../elements/ArrestsList/ArrestsList";
// Style imports.
import './Sidebar.css';


const SubredditMenu = () => {

    // Get theme objects and variables
    const background = useThemeObject("backgroundColor", "border");
    const primaryText = useThemeObject("color", "primaryText");

    return (
        <div className="Sidebar">
            <div className="sidebar-sort" style={background}>
                <Sort />
            </div>
            <div className="sidebar-sr-list" style={background}>
                <p className="sidebar-sr-label" style={primaryText}>Subreddit</p>
                <SubredditList />
            </div>
            <div className="sidebar-arrests-list" style={background}>
            <p className="sidebar-arrests-label" style={primaryText}>Arrested Users</p> 
                <ArrestsList />
            </div>
        </div>
    );
};

export default SubredditMenu;
