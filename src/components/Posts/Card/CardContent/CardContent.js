// React module imports.
import React from "react";
import he from 'he';
// Local imports.
import GalleryViewer from "./GalleryViewer/GalleryViewer";
import PostText from "./PostText/PostText";
// Style imports. 
import "./CardContent.css";

const CardContent = ({ postTitle, postText, borderColor, secondaryText, url, media, isVideo, pollData, postHint, galleryData, mediaMetaData }) => {

    // Remove escaped '&' character encodings from title.
    const decodedTitle = postTitle ? he.decode(postTitle.replace(/&amp;/g, '&')) : '';

    // Decode html entities from post text.
    const decodedText = postText && he.decode(postText);

    // Extract decoded URLs from galleryData
    let galleryImages = [];
    if (galleryData) {
        galleryImages = galleryData.items.map((item) => {
            const galleryImageUrl = mediaMetaData && mediaMetaData[item.media_id].s.u;
            // Remove escaped & character encodings from URL.
            return galleryImageUrl ? he.decode(galleryImageUrl.replace(/&amp;/g, '&')) : '';
        });
    }

    // Function to determine media type and render accordingly.
    const renderMedia = () => {
        if (media && media.type === "youtube.com") {
            const videoUrl = media.oembed.html.match(/src=["'](.*?)["']/)[1];
            return (
                <div className="youtube-video-container">
                    <iframe
                        className="video"
                        title={postTitle}
                        src={videoUrl}
                        allowFullScreen>
                    </iframe>
                </div>
            );
        } else if (media && media.reddit_video) {
            const decodedUrl = media.reddit_video.fallback_url ? he.decode(media.reddit_video.fallback_url.replace(/&amp;/g, '&')) : '';

            return (
                <div className="reddit-video-container">
                    <iframe
                        className="video"
                        title={postTitle}
                        width={media.reddit_video.width}
                        height={media.reddit_video.height}
                        src={decodedUrl}>
                    </iframe>
                </div>
            );
        } else if (postHint === "image" && !isVideo && !media) {
            return (
                <div className="image-container">
                    <img className="post-image" src={url} alt="example" />
                </div>
            );
        } else if (pollData) {
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
        } else if (galleryData) {
            return (
                <div className="image-container">
                    {galleryImages.length > 0 && <GalleryViewer images={galleryImages} />}
                </div>
            );
        } else if (postHint === "link") {
            return (
                <div className="link-container">
                    <a href={url} target="blank">{url}</a>
                </div>
            )
        } else {
            return <></>
        }
    };

    return (
        <div className="card-content" style={borderColor}>
            <p className="post-title">{decodedTitle}</p>
            {renderMedia()}
            <PostText decodedText={decodedText}/>
        </div>
    );
};

export default CardContent;
