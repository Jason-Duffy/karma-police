// React module imports.
import React from "react";
// Local imports.
import { useThemeObject } from '../../../hooks/themeHooks';
import UserInfo from "./UserInfo/UserInfo";
import CardContent from "./CardContent/CardContent";
import PostInfo from "./PostInfo/PostInfo";
import ArrestAction from "./ArrestAction/ArrestAction";
// Style imports.
import './Card.css';

// Card.js
const Card = ({ post, cardId }) => {

    // Inline style variables.
    const primaryText = useThemeObject("color", "primaryText");
    const borderColor = useThemeObject("backgroundColor", "border");

    return (
        <div className="card-container" id={cardId} style={primaryText}>
            <UserInfo post={post} />
            <div className="card" style={borderColor}>
                <CardContent
                    post={post}
                />
                <PostInfo
                    post={post}
                />
            </div>
            <ArrestAction post={post} />
        </div>
    );
};

export default Card;