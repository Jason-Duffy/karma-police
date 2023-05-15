import React from 'react';
import '../stylesheets/Searchbar.css';
//import { FaSearch } from "react-icons/fa";

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