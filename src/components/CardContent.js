import React from "react";
import sampleImage from '../images/istockphoto-1347249753-2048x2048.jpg';

const CardContent = ({ postTitle, postText, borderColor, secondaryText }) => (
    <div className="card" style={borderColor}>
        <p className="post-title">{postTitle}</p>
        <img
            className="post-image"
            src={sampleImage}
            alt="example"
        />
        <p className="post-text" style={secondaryText}>{postText}</p>
    </div>
);

export default CardContent;