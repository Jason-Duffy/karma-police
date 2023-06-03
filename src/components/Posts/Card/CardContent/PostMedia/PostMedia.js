// React module imports. 
import React from "react";
import he from 'he';
import styled from 'styled-components';
// Local imports.
import GalleryViewer from "./GalleryViewer/GalleryViewer";
import { useThemeColors } from "../../../../../hooks/themeHooks";
// Style imports.
import './PostMedia.css';

// Create a styled component that will apply the theme colors.
const StyledLink = styled.a`
    color: ${props => props.themeColor};

    &:link {
    color: ${props => props.themeColor};
    }

    &:visited {
    color: ${props => props.themeColor};
    }`;

const PostMedia = ({ post }) => {

    const {
        galleryData,
        mediaMetaData,
        crossposts,
        media,
        postHint,
        isVideo,
        urlOverridden,
        url,
        postTitle
    } = post;

    const decodedUrl = he.decode(url);
    const decodedUrlOverridden = he.decode(url);

    // Get theme colors.
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;


    // Extract decoded URLs from galleryData
    let galleryImages = [];
    if (galleryData) {
        galleryImages = galleryData.items.map((item) => {
            const galleryImageUrl = mediaMetaData && mediaMetaData[item.media_id].s.u;
            // Remove escaped & character encodings from URL.
            return galleryImageUrl && he.decode(galleryImageUrl);
        });
    }

    let crosspostGalleryImages = [];
    if (crossposts && crossposts[0].gallery_data) {
        crosspostGalleryImages = crossposts[0].gallery_data.items.map((item) => {
            const galleryImageUrl = crossposts[0].media_metadata && crossposts[0].media_metadata[item.media_id].s.u;
            // Remove escaped & character encodings from URL.
            return galleryImageUrl && he.decode(galleryImageUrl);
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
            } else if (crossposts[0].removed_by_category === "deleted") {
                return <p className="error-message">This post has been deleted.</p>
            } else {
                return <p className="error-message">CROSSPOST - ERROR - MEDIA NOT RECOGNISED - post_hint ={postHint}</p>
            }
        } else if (postHint === "image" && !isVideo && !media) {
            return renderImage();
        } else if (galleryData) {
            return renderImageGallery();
        } else if (postHint === "link") {
            return renderUrl();
        } else if (urlOverridden) {
            return renderUrlOverridden();
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
                    title={postTitle}
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
                    title={postTitle}
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
                <img className="post-image" src={decodedUrl} alt="" />
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
                {crosspostGalleryImages.length > 0 && <GalleryViewer images={crosspostGalleryImages} />}
            </div>
        );
    }

    const renderUrl = () => {
        return (
            <div className="link-container">
                <StyledLink href={decodedUrl} target="_blank" rel="noopener noreferrer" themeColor={accentColor}>
                    {decodedUrl}
                </StyledLink>
            </div>
        )
    }

    const renderUrlOverridden = () => {
        return (
            <div className="link-container">
                <StyledLink href={decodedUrlOverridden} target="_blank" rel="noopener noreferrer" themeColor={accentColor}>
                    {decodedUrlOverridden}
                </StyledLink>
            </div>
        )
    }

    return (
        <div>
            {renderMedia()}
        </div>
    );
};

export default PostMedia;