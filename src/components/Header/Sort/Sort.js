// React module imports. 
import React from "react";
// Local imports.
import SortButtons from "../../../elements/SortButtons/SortButtons"
import { useThemeObject } from "../../../hooks/themeHooks";
// Style imports. 
import './Sort.css';


const Sort = () => {

    // Get theme objects and variables
    const background = useThemeObject("backgroundColor", "border");
    const primaryText = useThemeObject("color", "primaryText");

    return (
        <div className="sort" style={background}>
            <p id="sort-label" style={primaryText}>Sort by Karma</p>
            <SortButtons />
        </div>
    );
};

export default Sort;