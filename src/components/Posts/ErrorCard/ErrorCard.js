// React module imports.
import React from "react";
// Local imports.
import { useThemeObject } from "../../../hooks/themeHooks";
// Style imports.
import "../NoSearchResultsCard/NoSearchResultsCard.css"

const ErrorCard = (error) => {

    // Inline style variables.
    const primaryText = useThemeObject("color", "primaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    return (
        <div className="no-search-results-card-container" style={borderColor}>
            <div className="no-search-results-card">
                <p style={primaryText}>Whoops! There's been an error. Try another subreddit.</p>
            </div>
        </div>
    );
};

export default ErrorCard;