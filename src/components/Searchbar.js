import React from 'react';
import '../stylesheets/Searchbar.css';

const Searchbar = () => {
    return (
        <form>
            <input
                type="search"
                placeholder='Search...'
            />
            <button
                type="submit"
            >Search</button>
        </form>
    );
}

export default Searchbar;