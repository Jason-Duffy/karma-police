// React module imports. 
import React from "react";
import he from 'he';
// Local imports.
import GalleryViewer from "./GalleryViewer/GalleryViewer";
// Style imports. 

const PostMedia = ({ url, media, isVideo, postHint, galleryData, mediaMetaData }) => {

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
            const videoTitle = he.decode(media.oembed.title);
            return (
                <div className="youtube-video-container">
                    <iframe
                        className="video"
                        title={videoTitle}
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
                        //title={postTitle}
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
        <div>
            {renderMedia()}
        </div>
    );
};

export default PostMedia;