// React module imports.
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Local imports.
import { useThemeColors } from '../../../hooks/themeHooks';
import { selectSubredditData } from '../../../redux/subredditDataSlice';
import { setSearchResults } from '../../../redux/searchResultsSlice';
// Style imports.
import './Searchbar.css';


const Searchbar = () => {

    const dispatch = useDispatch();

    // Store state for user input.
    const [input, setInput] = useState('');

    // Store state for reactive styling.
    const [isFocused, setIsFocused] = useState(false);

    // Get variables for theme colors & other styling. 
    const themeColors = useThemeColors();
    const secondaryText = themeColors.secondaryText;

    const focusStyles = isFocused ? {
        boxShadow: `0 0 3px 0 ${secondaryText}`,
        borderColor: secondaryText,
        outline: 'none',
      } : {};

    // Get posts array from state.
    const posts = useSelector(selectSubredditData);

    // Search function handlers.
    const handleInputChange = (event) => {
        setInput(event.target.value);
        if (event.target.value === '') {
            dispatch(setSearchResults([]));
        }
    }

    const handleSearch = (event) => {
        event.preventDefault(); // prevent the page from refreshing
        const lowercasedInput = input.toLowerCase();
        const filteredPosts = posts.filter((post) => {
            return (post.postTitle && post.postTitle.toLowerCase().includes(lowercasedInput)) || 
                   (post.postText && post.postText.toLowerCase().includes(lowercasedInput));
        });
        const matchedPostIds = filteredPosts.map((post) => (post.postId));
        dispatch(setSearchResults(matchedPostIds));
    }
    

    return (
        <form onSubmit={handleSearch}>
            <input
                type="search"
                value={input}
                onChange={handleInputChange}
                placeholder='Search...'
                style={focusStyles}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <button
                type="submit"
            >Search</button>
        </form>
    );
}

export default Searchbar;