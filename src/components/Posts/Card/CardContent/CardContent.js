// React module imports.
import React from "react";
// Local imports.
// Style imports. 
import "./CardContent.css";

const CardContent = ({ postTitle, postText, borderColor, secondaryText, image, media, isVideo, pollData, postHint }) => {
    const renderMedia = () => {
        if (media && media.type === "youtube.com") {
            const videoUrl = media.oembed.html.match(/src=["'](.*?)["']/)[1];
            return (
                <div className="video-container">
                    <iframe
                        className="video"
                        title={postTitle}
                        src={videoUrl}
                        allowFullScreen>
                    </iframe>
                </div>
            );
        } else if (media && media.reddit_video) {
            return (
                <div className="video-container">
                    <iframe
                        title={postTitle}
                        width="100%"
                        height="100%"
                        src={media.reddit_video.fallback_url}>
                    </iframe>
                </div>
            );
        } else if (postHint === "image" && !isVideo && !media) {
            return (
                <div className="image-container">
                    <img className="post-image" src={image} alt="example" />
                </div>
            );
        } else if (pollData) {
            return (
              <div className="poll-container">
                <a href={image} target="blank">{postText}</a>
                <ul>
                  {pollData.options.map((option) => (
                    <li key={option.id}>{option.text}</li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return <p>No media available</p>;
        }
    };

    return (
        <div className="card-content" style={borderColor}>
            <p className="post-title">{postTitle}</p>
            {renderMedia()}
            <p className="post-text" style={secondaryText}>
                {postText}
            </p>
        </div>
    );
};

export default CardContent;
