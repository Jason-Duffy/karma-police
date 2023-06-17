// React module imports.
import React from "react";
import { getReasonPhrase } from 'http-status-codes';
// Local imports.
import { useThemeObject } from "../../../hooks/themeHooks";
// Style imports.
import "../NoSearchResultsCard/NoSearchResultsCard.css"

const ErrorCard = ({ errorCode }) => {

    // Inline style variables.
    const primaryText = useThemeObject("color", "primaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    const statusDescription = getReasonPhrase(errorCode);

    return (
        <div className="no-search-results-card-container" style={borderColor}>
            <div className="no-search-results-card">
                <p
                    data-testid="error-message"
                    style={primaryText}>
                    Whoops! There's been an error: {errorCode} {statusDescription}. Try another subreddit.
                </p>
            </div>
        </div>
    );
};

export default ErrorCard;