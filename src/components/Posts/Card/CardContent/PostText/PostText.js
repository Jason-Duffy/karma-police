// React module imports.
import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import he from 'he';
import DOMPurify from 'dompurify';
// Local imports.
import { useThemeColors } from "../../../../../hooks/themeHooks";
// Style imports. 
import './PostText.css';

// Create styled component for post text. 
// Workaround for styling child html entities whilst using dangerouslySetInnerHtml
const PostTextContainer = styled.div`
    text-align: justify;
    a {
        color: ${props => props.linkColor};
        word-wrap: break-word;
        overflow-wrap: break-word;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
        margin-right: 10px
    }

    h1, h2, h3, h4, h5, h6 {
        padding-top: 20px;
        color: ${props => props.headingColor};
        margin-right: 10px;
    }

    p {
        color: ${props => props.textColor};
        margin-left: 0px;
    }

    table {
        width: 40%;
    }

    th {
        color: ${props => props.headingColor};
    }

    tr {
        color: ${props => props.textColor};
    }
    `;

const PostText = ({ post }) => {

    // Destuctured values from post prop.
    const {
        postText,
    } = post;

    // Vars for text rendering.
    let decodedText = "";
    let sanitisedHTML = "";

    // Decode and sanitise html entities from post text.
    decodedText = postText && he.decode(postText);
    sanitisedHTML = DOMPurify.sanitize(decodedText);

    // Create a reference to the post text container. 
    const postTextRef = useRef(null);
    const host = window.location.origin;
    const reddit = 'https://www.reddit.com';

    // Ensure relative links in post text have reddit.com as their base URL.
    useEffect(() => {
        if (postTextRef.current) {
            const links = postTextRef.current.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                if (links[i].href.startsWith(host)) {
                    links[i].href = links[i].href.replace(host, reddit);
                }
                links[i].target = '_blank';
                links[i].rel = 'noopener noreferrer';
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decodedText]);



    // Get theme color variables. 
    const themeColors = useThemeColors();

    const linkColor = themeColors.accent;
    const textColor = themeColors.secondaryText;
    const headingColor = themeColors.primaryText;

    return (
        <PostTextContainer
            data-testid="post-text"
            className="post-text"
            dangerouslySetInnerHTML={{ __html: sanitisedHTML }}
            linkColor={linkColor}
            textColor={textColor}
            headingColor={headingColor}
            ref={postTextRef}
        />
    );
};

export default PostText;
