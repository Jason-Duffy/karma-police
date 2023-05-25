import React from "react";
import { HiMenu } from "react-icons/hi";
import { useThemeColors, useThemeObject } from '../../hooks/themeHooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuButtonState, toggleMenuButtonState } from "../../redux/menuButtonSlice";
import "../stylesheets/MenuButton.css"


const MenuButton = () => {

    // Get theme objects and variables
    const themeColors = useThemeColors();
    const buttonColor = useThemeObject("backgroundColor", "primaryText");
    const background = themeColors.background;

    // Get and manage the current menu state
    const menuButtonState = useSelector(selectMenuButtonState);

    const dispatch = useDispatch();

    const toggleMenuButton = () => {
        dispatch(toggleMenuButtonState());
    };

    // Conditional className
    const menuButtonClass = menuButtonState === 'open' ? 'menuIcon rotate' : 'menuIcon';

    return (
        <div className="menuButton-container">
            <HiMenu
                className={menuButtonClass}
                style={buttonColor}
                color={background}
                size="35"
                onClick={toggleMenuButton}
            />
        </div >
    );
};

export default MenuButton;