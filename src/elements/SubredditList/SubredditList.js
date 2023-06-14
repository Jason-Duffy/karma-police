// React module imports.
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Local imports.
import subredditList from '../../assets/data/subreddits.json';
import { useThemeColors } from "../../hooks/themeHooks";
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

    // Get theme variables. 
    const themeColors = useThemeColors();
    const secondaryText = themeColors.secondaryText;
    const accentColor = themeColors.accent;

    // Helper function to render list of subreddits.
    const renderList = (list) => {
        return list.map((subreddit, i) => {
            return (
                <li id="sr-name" key={i}>
                    <StyledNavLink
                        to={`/${subreddit}`}
                        secondarytext={secondaryText}
                        accentcolor={accentColor}
                    >
                        {subreddit}
                    </StyledNavLink>
                </li>
            );
        })
    }

    return (
        <div data-testid='subredditList-1'>
            <ul id="sr-list" style={{ color: secondaryText }}>
                {
                    renderList(subredditList)
                }
            </ul>
        </div>
    );
}

export default SubredditList;
