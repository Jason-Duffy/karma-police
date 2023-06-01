// React module imports.
import React from "react";
// Local imports.
import { useThemeColors, useThemeObject } from '../../../hooks/themeHooks';
import UserInfo from "./UserInfo/UserInfo";
import CardContent from "./CardContent/CardContent";
import PostInfo from "./PostInfo/PostInfo";
import ArrestAction from "./ArrestAction/ArrestAction";
// Style imports.
import './Card.css';

// Card.js
const Card = ({
    title, 
    username,
    created,
    comments,
    postHint,
    url,
    postText,
    media,
    isVideo,
    pollData
}) => {
    // Inline style variables and objects.
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;
    const primaryText = useThemeObject("color", "primaryText");
    const secondaryText = useThemeObject("color", "secondaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    return (
        <div className="card-container" style={primaryText}>
            <UserInfo username={username} accentColor={accentColor} />
            <div className="card" style={borderColor}>
                <CardContent
                    postTitle={title}
                    postText={postText}
                    borderColor={borderColor}
                    secondaryText={secondaryText}
                    url={url}
                    media={media}
                    isVideo={isVideo}
                    pollData={pollData}
                    postHint={postHint}
                />
                <PostInfo
                    username={username}
                    created={created}
                    comments={comments}
                    accentColor={accentColor}
                />
            </div>
            <ArrestAction accentColor={accentColor} />
        </div>
    );
};

export default Card;