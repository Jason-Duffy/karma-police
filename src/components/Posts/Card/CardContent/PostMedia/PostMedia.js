// React module imports. 
import React from "react";
import he from 'he';
// Local imports.
import GalleryViewer from "./GalleryViewer/GalleryViewer";
// Style imports.
import './PostMedia.css';

const PostMedia = ({ url, media, isVideo, postHint, galleryData, mediaMetaData, crossposts }) => {

    // Extract decoded URLs from galleryData
    let galleryImages = [];
    if (galleryData) {
        galleryImages = galleryData.items.map((item) => {
            const galleryImageUrl = mediaMetaData && mediaMetaData[item.media_id].s.u;
            // Remove escaped & character encodings from URL.
            return galleryImageUrl ? he.decode(galleryImageUrl.replace(/&amp;/g, '&')) : '';
        });
    }

    let crosspostGalleryImages = [];
    if (crossposts && crossposts[0].gallery_data) {
        crosspostGalleryImages = crossposts[0].gallery_data.items.map((item) => {
            const galleryImageUrl = crossposts[0].mediaMetaData && crossposts[0].mediaMetaData[item.media_id].s.u;
            // Remove escaped & character encodings from URL.
            return galleryImageUrl ? he.decode(galleryImageUrl.replace(/&amp;/g, '&')) : '';
        });
    }

    const renderMedia = () => {
        if (media && media.type === "youtube.com") {
            return renderYoutubeVideo();
        } else if (media && media.reddit_video) {
            return renderRedditVideo();
        } else if (crossposts) {
            if (crossposts[0].media && crossposts[0].media.reddit_video) {
                return renderCrosspostRedditVideo();
            } else if (crossposts[0].gallery_data) {
                return renderCrosspostImageGallery();
            } else if (postHint === "image" && !crossposts[0].is_video && !crossposts[0].media) {
                return renderImage();
            } else {
                return <p>CROSSPOST - ERROR - MEDIA NOT RECOGNISED</p>
            }
        } else if (postHint === "image" && !isVideo && !media) {
            return renderImage();
        } else if (galleryData) {
            return renderImageGallery();
        } else if (postHint === "link") {
            return renderLink();
        } else {
            return <p>NO MEDIA DETECTED</p>;
        }
    }

    const renderYoutubeVideo = () => {
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
    }

    const renderRedditVideo = () => {
        const decodedUrl = he.decode(media.reddit_video.fallback_url);
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
    }

    const renderCrosspostRedditVideo = () => {
        const decodedUrl = he.decode(crossposts[0].media.reddit_video.fallback_url);
        return (
            <div className="reddit-video-container">
                <iframe
                    className="video"
                    //title={postTitle}
                    width={crossposts[0].media.reddit_video.width}
                    height={crossposts[0].media.reddit_video.height}
                    src={decodedUrl}>
                </iframe>
            </div>
        );
    }

    const renderImage = () => {
        return (
            <div className="image-container">
                <img className="post-image" src={url} alt="" />
            </div>
        );
    }

    const renderImageGallery = () => {
        return (
            <div className="image-container">
                {galleryImages.length > 0 && <GalleryViewer images={galleryImages} />}
            </div>
        );
    }

    const renderCrosspostImageGallery = () => {
        return (
            <div className="image-container">
                {galleryImages.length > 0 && <GalleryViewer images={crosspostGalleryImages} />}
            </div>
        );
    } 

    const renderLink = () => {
        return (
            <div className="link-container">
                <a href={url} target="blank">{url}</a>
            </div>
        )
    }

    // Function to determine media type and render accordingly.
    const oldRenderMedia = () => {
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
        } else if (crossposts) {
            if (crossposts[0].media && crossposts[0].media.reddit_video) {
                const decodedUrl = he.decode(crossposts[0].media.reddit_video.fallback_url);
                return (
                    <div className="reddit-video-container">
                        <iframe
                            className="video"
                            //title={postTitle}
                            width={crossposts[0].media.reddit_video.width}
                            height={crossposts[0].media.reddit_video.height}
                            src={decodedUrl}>
                        </iframe>
                    </div>
                );
            } else {
                return <p>CROSSPOST - ERROR - MEDIA NOT RECOGNISED</p>
            }

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