// React module imports.
import React from "react";
import { FaYinYang, FaRegClock, FaRegComment } from "react-icons/fa";
// Local imports.
import { useThemeColors } from "../../../../hooks/themeHooks";
// Style imports.
import "./PostInfo.css";


const PostInfo = ({ post }) => {

    const {
        created,
        comments,
        userData: { karma }
    } = post;

    // Get theme colors. 
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;

    const iconSize = 20;

    // Calculate time data. 
    let timeStamp = new Date(created * 1000);
    let currentTime = Date.now();
    let unit = "";
    let value = 0;
    const seconds = (currentTime - timeStamp) / 1000;
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.floor(hours / 24);

    // Determine unit to be displayed.
    if (days > 0) {
        unit = "Day";
        value = days;
    } if (days === 0) {
        unit = "Hour";
        value = hours;
    } if (hours === 0) {
        unit = "Minute";
        value = minutes;
    } if (minutes === 0) {
        unit = "Second";
        value = seconds;
    }

    // Pluralise if necessary.
    if (value > 1) {
        unit += 's';
    }

    return (
        <div className="post-info">
            <div className="karma-score">
                <FaYinYang color={accentColor} size={iconSize} />
                <span data-testid="karma-score">{karma}</span>
            </div>
            <div className="post-age">
                <FaRegClock color={accentColor} size={iconSize} />
                <span data-testid="post-age">{value} {unit}</span>
            </div>
            <div className="post-comments">
                <FaRegComment color={accentColor} size={iconSize} />
                <span data-testid="post-comments">{comments}</span>
            </div>
        </div>
    );
};

export default PostInfo;