// React module imports.
import React from "react";
import he from 'he';
// Local imports.
import PostMedia from "./PostMedia/PostMedia";
import PostText from "./PostText/PostText";
import { useThemeObject } from "../../../../hooks/themeHooks";
// Style imports. 
import "./CardContent.css";

const CardContent = ({ post }) => {
    // Destructured values from object.
    const {
        postTitle,
        pollData,
    } = post;

    // Get style variables. 
    const borderColor = useThemeObject("backgroundColor", "border");

    // Decode html entities from post title. 
    const decodedTitle = postTitle && he.decode(postTitle);

    const renderPoll = () => {
        if (pollData) {
            return (
                <div className="poll-container">
                    <p>Reddit Poll - Not currently voteable, click "View Poll" to vote on Reddit.com</p>
                    <ul>
                        {pollData.options.map((option) => (
                            <li key={option.id}>{option.text}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className="card-content" style={borderColor}>
            <p className="post-title">{decodedTitle}</p>
            <PostMedia
                post={post}
            />
            { renderPoll() }
            <PostText post={post} />
        </div>
    );
};

export default CardContent;
