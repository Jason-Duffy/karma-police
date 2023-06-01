// React module imports.
import React from "react";
import { useSelector } from "react-redux";
import { FaYinYang, FaRegClock, FaRegComment } from "react-icons/fa";
// Local imports.
import { selectUserData } from "../../../../redux/userSlice";
// Style imports.
import "./PostInfo.css";


const PostInfo = ({ username, created, comments, accentColor }) => {

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

    // Get Author Karma data.
    const userData = useSelector((state) => selectUserData(state, username));

    const karma = userData && userData.karma;

    return (
        <div className="post-info">
            <div className="karma-score">
                <FaYinYang color={accentColor} size={iconSize} />
                <span>{karma}</span>
            </div>
            <div className="post-age">
                <FaRegClock color={accentColor} size={iconSize} />
                <span>{value} {unit}</span>
            </div>
            <div className="post-comments">
                <FaRegComment color={accentColor} size={iconSize} />
                <span>{comments}</span>
            </div>
        </div>
    );
};

export default PostInfo;