import React from "react";
import '../stylesheets/Sort.css';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectTheme, themeColors } from '../redux/themeSlice'; 

const Sort = () => {
    const theme = useSelector(selectTheme); // get the current theme
    const accentColor = themeColors[theme].accent;

    return (
        <div className="sort">
            <p>Sort by Karma</p>
            <div className="arrows">
                <FaArrowCircleDown className="down-arrow" size={40} color={accentColor} />
                <FaArrowCircleUp className="up-arrow" size={40} color={accentColor} />
            </div>
        </div>
    );
};

export default Sort;
