// React module imports.
import React from "react";
import { useSelector } from 'react-redux';
// Local imports.
import { useThemeObject } from '../../hooks/themeHooks';
import DisplayToggle from './DisplayToggle/DisplayToggle';
import Searchbar from './Searchbar/Searchbar';
import MenuButton from "./MenuButton/MenuButton";
import Sort from "../../elements/SortButtons/SortButtons";
import SubredditsButton from "../../elements/SubredditsButton/SubredditsButton";
import SubredditList from "../../elements/SubredditList/SubredditList";
import { selectMenuButtonState } from "../../redux/menuButtonSlice";
import { selectSubredditButtonState } from "../../redux/subredditButtonSlice";
// Style imports.
import './Header.css';


const Header = () => {

    const background = useThemeObject("backgroundColor", "background");
    const accentColor = useThemeObject("color", "accent");
    const borderColor = useThemeObject("color", "secondaryText");
    const menuBackground = useThemeObject("backgroundColor", "background");

    // Get and manage the current menu and subreddit button states
    const menuButtonState = useSelector(selectMenuButtonState);
    const subredditButtonState = useSelector(selectSubredditButtonState);

    // Conditional classNames
    let menuContainerClass = '';

    if (menuButtonState === 'open') {
        menuContainerClass = 'menu-container mobile open';
    } else {
        menuContainerClass = 'menu-container mobile closed';
    }

    // Conditional className
    let srListContainerClass = '';
    if (subredditButtonState === 'open' && menuButtonState === 'open') {
        srListContainerClass = 'sr-list-container mobile open';
    } else {
        srListContainerClass = 'sr-list-container mobile closed';
    }

    return (
        <div className="header-container" style={background}>
            <div className="header" style={background}>
                <h1 className="logo">
                    <span className="karma" style={accentColor}>KARMA</span>
                    <span className="police" style={borderColor}>POLICE</span>
                </h1>
                <div className="rightSide desktop">
                    <DisplayToggle />
                    <Searchbar />
                </div>
                <div className="menuButton mobile">
                    <MenuButton />
                </div>
            </div>
            <div className={menuContainerClass}>
                <div className="menu-block" id="block-1" style={menuBackground}>
                    <DisplayToggle />
                    <Searchbar />
                </div>
                <div className="menu-block" id="block-2" style={menuBackground}>
                    <SubredditsButton />
                    <Sort />
                </div>
                <div className={srListContainerClass}>
                    <div className="list-block " id="block-3" style={menuBackground}>
                        <SubredditList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;