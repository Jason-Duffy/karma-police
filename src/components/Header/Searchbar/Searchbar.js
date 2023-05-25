// React module imports.
import React, { useState } from 'react';
// Local imports.
import { useThemeColors } from '../../../hooks/themeHooks';
// Style imports.
import './Searchbar.css';


const Searchbar = () => {

    const [isFocused, setIsFocused] = useState(false);
    const themeColors = useThemeColors();
    const secondaryText = themeColors.secondaryText;

    const focusStyles = isFocused ? {
        boxShadow: `0 0 3px 0 ${secondaryText}`,
        borderColor: secondaryText,
        outline: 'none',
      } : {};

    return (
        <form>
            <input
                type="search"
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