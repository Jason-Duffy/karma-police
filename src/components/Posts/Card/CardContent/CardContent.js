// React module imports.
import React from "react";
// Local imports.
// Style imports. 
import "./CardContent.css";


const CardContent = ({ postTitle, postText, borderColor, secondaryText, image }) => (
    <div className="card" style={borderColor}>
        <p className="post-title">{postTitle}</p>
        <img
            className="post-image"
            src={image}
            alt="example"
        />
        <p className="post-text" style={secondaryText}>{postText}</p>
    </div>
);

export default CardContent;