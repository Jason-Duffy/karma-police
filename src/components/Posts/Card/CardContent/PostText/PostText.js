import React from "react";
import styled from 'styled-components';

import { useThemeColors } from "../../../../../hooks/themeHooks";

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
    `;

const PostText = ({ decodedText }) => {

    const themeColors = useThemeColors();

    const linkColor = themeColors.accent;
    const textColor = themeColors.secondaryText;
    const headingColor = themeColors.primaryText;

    return (
        <PostTextContainer
            className="post-text"
            dangerouslySetInnerHTML={{ __html: decodedText }}
            linkColor={linkColor}
            textColor={textColor}
            headingColor={headingColor}
        />
    );
};

export default PostText;