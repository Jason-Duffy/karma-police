// React module imports.
import React from "react";
import he from 'he';
import DOMPurify from 'dompurify';
// Local imports.
import PostMedia from "./PostMedia/PostMedia";
import PostText from "./PostText/PostText";
import { useThemeObject } from "../../../../hooks/themeHooks";
// Style imports. 
import "./CardContent.css";

const CardContent = ({ postTitle, postText, url, media, isVideo, pollData, postHint, galleryData, mediaMetaData, crossposts }) => {

    // Get style variables. 
    const borderColor = useThemeObject("backgroundColor", "border");

    // Decode html entities from post title. 
    const decodedTitle = postTitle && he.decode(postTitle);

    // Decode and sanitise html entities from post text.
    const decodedText = postText && he.decode(postText);
    const sanitisedHTML = DOMPurify.sanitize(decodedText);

    const renderPoll = () => {
        if (pollData) {
            return (
                <div className="poll-container">
                    <a href={url} target="blank">Link to Poll on Reddit.</a>
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
                url={url}
                media={media}
                isVideo={isVideo}
                postHint={postHint}
                galleryData={galleryData}
                mediaMetaData={mediaMetaData}
                crossposts={crossposts}
            />
            { renderPoll() }
            <PostText decodedText={sanitisedHTML} />
        </div>
    );
};

export default CardContent;
