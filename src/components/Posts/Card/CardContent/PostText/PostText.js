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
    a {
        color: ${props => props.linkColor};
    }

    h1, h2, h3, h4, h5, h6 {
        padding-top: 20px;
        color: ${props => props.headingColor};
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
        crossposts
    } = post;

    // Vars for text rendering.
    let decodedText = "";
    let sanitisedHTML = "";

    if (crossposts) {
        // Decode and sanitise html entities from crosspost text.
        decodedText = crossposts[0].selftext_html && he.decode(crossposts[0].selftext_html);
        sanitisedHTML = DOMPurify.sanitize(decodedText);
    } else {
        // Decode and sanitise html entities from post text.
        decodedText = postText && he.decode(postText);
        sanitisedHTML = DOMPurify.sanitize(decodedText);
    }

    // Create a reference to the post text container. 
    const postTextRef = useRef(null);
    const host = window.location.origin;
    const reddit = 'https://www.reddit.com/';

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
    }, [decodedText]);



    // Get theme color variables. 
    const themeColors = useThemeColors();

    const linkColor = themeColors.accent;
    const textColor = themeColors.secondaryText;
    const headingColor = themeColors.primaryText;

    return (
        <PostTextContainer
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
