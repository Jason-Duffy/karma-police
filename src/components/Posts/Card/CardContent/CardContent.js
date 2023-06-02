// React module imports.
import React from "react";
import he from 'he';
// Local imports.
import PostMedia from "./PostMedia/PostMedia";
import PostText from "./PostText/PostText";
// Style imports. 
import "./CardContent.css";

const CardContent = ({ postTitle, postText, borderColor, secondaryText, url, media, isVideo, pollData, postHint, galleryData, mediaMetaData }) => {

    // Decode html entities from post title. 
    const decodedTitle = postTitle && he.decode(postTitle);

    // Decode html entities from post text.
    const decodedText = postText && he.decode(postText);

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
            />
            { renderPoll() }
            <PostText decodedText={decodedText} />
        </div>
    );
};

export default CardContent;
