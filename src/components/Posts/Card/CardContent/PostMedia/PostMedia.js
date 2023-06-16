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

    word-wrap: break-word;
    overflow-wrap: break-word;

    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;

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
        media,
        postHint,
        isVideo,
        urlOverridden,
        url,
        postTitle
    } = post;

    // Decode urls.
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

    const renderMedia = () => {
        if (media && media.type === "youtube.com") {
            return renderYoutubeVideo();
        } else if (media && media.reddit_video) {
            return renderRedditVideo();
        } else if (postHint === "image" && !isVideo && !media) {
            return renderImage();
        } else if (galleryData) {
            return renderImageGallery();
        } else if (postHint === "link") {
            return renderUrl();
        } else if (urlOverridden) {
            return renderUrlOverridden();
        } else {
            return;
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
                    data-testid="reddit_video" 
                    className="video"
                    title={postTitle}
                    width={media.reddit_video.width}
                    height={media.reddit_video.height}
                    src={decodedUrl}>
                </iframe>
            </div>
        );
    }

    const renderImage = () => {
        return (
            <div className="image-container">
                <img data-testid="image" className="post-image" src={decodedUrl} alt="" />
            </div>
        );
    }

    const renderImageGallery = () => {
        return (
            <div data-testid="image-gallery" className="image-container">
                {galleryImages.length > 0 && <GalleryViewer images={galleryImages} />}
            </div>
        );
    }

    const renderUrl = () => {
        return (
            <div className="link-container">
                <StyledLink data-testid="link" href={decodedUrl} target="_blank" rel="noopener noreferrer" themeColor={accentColor}>
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