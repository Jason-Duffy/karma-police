// React module imports.
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Local imports.
import subredditList from '../../assets/data/subreddits.json';
import { useThemeObject } from "../../hooks/themeHooks";
import './SubredditList.css';

// Create a styled component for your links
const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    color: ${props => props.secondarytext};
    &.active {
        font-weight: bold;
        font-size: larger;
        color: ${props => props.accentcolor};
    }
`;

const SubredditList = () => {

    const secondaryText = useThemeObject("color", "secondaryText");
    const accentColor = useThemeObject("color", "accent");

    return (
        <div>
            <ul id="sr-list" style={secondaryText}>
                {
                    subredditList.map((subreddit, i) => {
                        return (
                            <li id="sr-name" key={i}>
                                <StyledNavLink 
                                    to={`/${subreddit}`}
                                    secondarytext={secondaryText.color}
                                    accentcolor={accentColor.color}
                                >
                                    {subreddit}
                                </StyledNavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default SubredditList;
