// React module imports.
import React from "react";
// Local imports.
import { useThemeObject } from "../../../hooks/themeHooks";
// Style imports.
import "./NoSearchResultsCard.css"

const NoSearchResultsCard = () => {

    // Inline style variables.
    const primaryText = useThemeObject("color", "primaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    return (
        <div className="no-search-results-card-container" style={borderColor}>
            <div className="no-search-results-card">
                <p style={primaryText}>Sorry! No posts match your search term.</p>
            </div>
        </div>
    );
};

export default NoSearchResultsCard;