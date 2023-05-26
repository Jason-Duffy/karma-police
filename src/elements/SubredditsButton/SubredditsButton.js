// React module imports.
import React, { useState } from "react";
// Local imports.
import { useThemeObject, useThemeColors } from "../../hooks/themeHooks";
// Style imports.
import './SubredditsButton.css';


const SubredditsButton = () => {

    // Get theme objects and variables
    const buttonStyle = useThemeObject("backgroundColor", "accent");
    const themeColors = useThemeColors();
    const buttonText = themeColors.primaryText;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuButtonState = () => {
        setIsOpen(prevState => !prevState);
      };

    // Conditional className
    const subredditsButtonClass = isOpen ? 'subredditsIcon menu-open' : 'subredditsIcon';

    return (
        <div className="subreddits-button-container">
            <button
                id="subreddits-button"
                className={subredditsButtonClass}
                type="button"
                style={buttonStyle}
                onClick={toggleMenuButtonState}
            >
                <span id="subreddits-button-label" style={{color: buttonText}}>Subreddits</span>
            </ button>
        </div>
    );
};

export default SubredditsButton;