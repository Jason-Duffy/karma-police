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
const Card = ({ post }) => {

    // Inline style variables and objects.
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;
    const primaryText = useThemeObject("color", "primaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    return (
        <div className="card-container" style={primaryText}>
            <UserInfo post={post} accentColor={accentColor} />
            <div className="card" style={borderColor}>
                <CardContent
                    post={post}
                />
                <PostInfo
                    post={post}
                />
            </div>
            <ArrestAction accentColor={accentColor} />
        </div>
    );
};

export default Card;