import React from "react";
import { useThemeColors, useThemeObject } from '../hooks/themeHooks';
import '../stylesheets/Header.css'
import DisplayToggle from './DisplayToggle';
import Searchbar from './Searchbar';

const Header = () => {

    const background = useThemeObject("backgroundColor", "background");
    const accentColor = useThemeObject("color", "accent");
    const borderColor = useThemeObject("color", "secondaryText");

    return (
        <div className="header" style={background}>
            <h1 className="logo">
                <span className="karma" style={accentColor}>KARMA</span>
                <span className="police" style={borderColor}>POLICE</span>
            </h1>
            <div className="rightSide">
                <DisplayToggle id="icon" />
                <Searchbar />
            </div>
        </div>
    );
}

export default Header;