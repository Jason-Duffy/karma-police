import React from "react";
import { useThemeColors, useThemeObject } from '../hooks/themeHooks';
import UserInfo from "./UserInfo";
import CardContent from "./CardContent";
import PostInfo from "./PostInfo";
import ArrestAction from "./ArrestAction";
import '../stylesheets/Card.css';


const username = "User65529";
const postTitle = "Witty Post Title";
const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const postAuthorKarma = 227;
const postAge = 14;
const postComments = 45;


// Card.js
const Card = () => {
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
                <CardContent postTitle={postTitle} postText={postText} borderColor={borderColor} secondaryText={secondaryText} />
                <PostInfo postAuthorKarma={postAuthorKarma} postAge={postAge} postComments={postComments} accentColor={accentColor} />
            </div>
            <ArrestAction accentColor={accentColor} />
        </div>
    );
};

export default Card;