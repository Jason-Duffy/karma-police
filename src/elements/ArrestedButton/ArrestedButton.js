// React module imports.
import React from "react";
import { useDispatch } from 'react-redux';
// Local imports.
import { useThemeObject, useThemeColors } from "../../hooks/themeHooks";
import { toggleArrestedButtonState } from "../../redux/arrestedButtonSlice";
// Style imports.
import './ArrestedButton.css';


const ArrestedButton = () => {

    // Get theme objects and variables
    const buttonStyle = useThemeObject("backgroundColor", "accent");
    const themeColors = useThemeColors();
    const buttonText = themeColors.primaryText;

    const dispatch = useDispatch();

    const toggleArrestedButton = () => {
        dispatch(toggleArrestedButtonState());
    };

    return (
        <div className="arrested-button-container">
            <button
                id="arrested-button"
                type="button"
                style={buttonStyle}
                onClick={toggleArrestedButton}
            >
                <span id="arrested-button-label" style={{color: buttonText}}>Arrested</span>
            </ button>
        </div>
    );
};

export default ArrestedButton;