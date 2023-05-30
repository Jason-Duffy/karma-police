// React module imports.
import React from "react";
// Local imports.
// Style imports. 
import "./CardContent.css";

const CardContent = ({ postTitle, postText, borderColor, secondaryText, image, media, isVideo }) => {

    const renderMedia = () => {
        if (media && media.type === "youtube.com") {
          const videoUrl = media.oembed.html.match(/src=["'](.*?)["']/)[1];
          return <iframe title={postTitle} width="100%" height="auto" src={videoUrl} frameBorder="0" allowFullScreen></iframe>;
        } else if (media && media.reddit_video) {
            return <iframe title={postTitle} width="100%" height="auto" src={media.reddit_video.fallback_url} />
        } else if (image && !isVideo) {
          return <img className="post-image" src={image} alt="example" />;
        } else {
          return <p>No media available</p>;
        }
      };
    

      return (
        <div className="card" style={borderColor}>
          <p className="post-title">{postTitle}</p>
          {renderMedia()}
          <p className="post-text" style={secondaryText}>
            {postText}
          </p>
        </div>
      );
    };

    
    
    
    
    
  


export default CardContent;