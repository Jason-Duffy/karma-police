// React module imports.
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// Local imports.
import { useThemeObject } from '../../hooks/themeHooks';
import DisplayToggle from './DisplayToggle/DisplayToggle';
import Searchbar from './Searchbar/Searchbar';
import MenuButton from "./MenuButton/MenuButton";
import Sort from "../../elements/SortButtons/SortButtons";
import SubredditsButton from "../../elements/SubredditsButton/SubredditsButton";
import SubredditList from "../../elements/SubredditList/SubredditList";
import { selectMenuButtonState } from "../../redux/menuButtonSlice";
import { selectSubredditButtonState, toggleSubredditButtonState } from "../../redux/subredditButtonSlice";
import ArrestedButton from "../../elements/ArrestedButton/ArrestedButton";
import ArrestsList from "../../elements/ArrestsList/ArrestsList";
import { selectArrestedButtonState, toggleArrestedButtonState } from "../../redux/arrestedButtonSlice";
import { selectNoResults } from "../../redux/searchResultsSlice";
// Style imports.
import './Header.css';


const Header = () => {

    const background = useThemeObject("backgroundColor", "background");
    const accentColor = useThemeObject("color", "accent");
    const borderColor = useThemeObject("color", "secondaryText");
    const menuBackground = useThemeObject("backgroundColor", "background");
    const primaryText = useThemeObject("color", "primaryText");

    // Get and manage the current menu, subreddit and arrested button states
    const menuButtonState = useSelector(selectMenuButtonState);
    const subredditButtonState = useSelector(selectSubredditButtonState);
    const arrestedButtonState = useSelector(selectArrestedButtonState);
    const noResults = useSelector(selectNoResults);

    const dispatch = useDispatch();

    // Toggle arrested button action dispatch
    const toggleArrestedButton = () => {
        dispatch(toggleArrestedButtonState());
    };

    // Toggle subreddit button action dispatch
    const toggleSubredditButton = () => {
        dispatch(toggleSubredditButtonState());
    };

    // Conditional className - Menu
    let menuContainerClass = '';
    if (menuButtonState === 'open') {
        menuContainerClass = 'menu-container mobile open';
    } else {
        menuContainerClass = 'menu-container mobile closed';
    }

    // Conditional className - Subreddit List
    let srListContainerClass = '';
    if (subredditButtonState === 'open' && menuButtonState === 'open') {
        srListContainerClass = 'sr-list-container mobile open';
    } else {
        srListContainerClass = 'sr-list-container mobile closed';
    }

    // Conditional className - Arrested List
    let arrestedListContainerClass = '';
    if (arrestedButtonState === 'open' && menuButtonState === 'open') {
        arrestedListContainerClass = 'arrested-list-container mobile open';
    } else {
        arrestedListContainerClass = 'arrested-list-container mobile closed';
    }

    useEffect(() => {
        if (subredditButtonState === "open" && arrestedButtonState === "open") {
            toggleSubredditButton();
        }
    }, [arrestedButtonState]);

    useEffect(() => {
        if (subredditButtonState === "open" && arrestedButtonState === "open") {
            toggleArrestedButton();
        }
    }, [subredditButtonState]);

    // Conditional className - No search results notice.
    let noSearchResultsNoticeClass = '';
    if (noResults && menuButtonState === 'open') {
        noSearchResultsNoticeClass = 'no-search-results-notice mobile open';
    } else {
        noSearchResultsNoticeClass = 'no-search-results-notice mobile closed';
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
                    <ArrestedButton />
                    <Sort />
                </div>
                <div className={srListContainerClass}>
                    <div className="list-block" id="block-3" style={menuBackground}>
                        <SubredditList />
                    </div>
                </div>
                <div className={arrestedListContainerClass}>
                    <div className="list-block" id="block-4" style={menuBackground}>
                        <ArrestsList />
                    </div>
                </div>
                <div className={noSearchResultsNoticeClass}>
                    <div className="menu-block" id="block-5" style={menuBackground}>
                        <p style={primaryText}>Sorry! No posts match your search term.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
