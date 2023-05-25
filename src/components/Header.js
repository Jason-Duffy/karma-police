import React from "react";
import { useThemeObject } from '../hooks/themeHooks';
import '../stylesheets/Header.css'
import DisplayToggle from './DisplayToggle';
import Searchbar from './Searchbar';
import MenuButton from "./MenuButton";
import { useSelector } from 'react-redux';
import { selectMenuButtonState } from "../redux/menuButtonSlice";

const Header = () => {

    const background = useThemeObject("backgroundColor", "background");
    const accentColor = useThemeObject("color", "accent");
    const borderColor = useThemeObject("color", "secondaryText");
    const menuBackground = useThemeObject("backgroundColor", "primaryText");

    // Get and manage the current menu state
    const menuButtonState = useSelector(selectMenuButtonState);

    // Conditional className
    const menuContainerClass = `menu-container mobile ${menuButtonState === 'open' ? 'open' : 'closed'}`;

    return (
        <div className="header-container" style={background}>
            <div className="header" style={background}>
                <h1 className="logo">
                    <span className="karma" style={accentColor}>KARMA</span>
                    <span className="police" style={borderColor}>POLICE</span>
                </h1>
                <div className="rightSide desktop">
                    <DisplayToggle id="icon" />
                    <Searchbar />
                </div>
                <div className="menuButton mobile">
                    <MenuButton />
                </div>
            </div>
            <div className={menuContainerClass}>
                <div className="menu-block" id="block-1" style={menuBackground}>

                </div>
                <div className="menu-block" id="block-2" style={menuBackground}>

                </div>
            </div>
        </div>
    );
}

export default Header;
