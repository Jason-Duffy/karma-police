import React, { useEffect, useState } from "react";
import '../stylesheets/Sort.css';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/themeSlice'; 

const Sort = () => {
    const theme = useSelector(selectTheme); // get the current theme
    const [accentColor, setAccentColor] = useState('#F7C948');  // default color

    // Effect to update accent color when theme changes
    useEffect(() => {
        const rootStyle = getComputedStyle(document.documentElement);
        const colorVariable = `--accent-color`;
        setAccentColor(rootStyle.getPropertyValue(colorVariable));
    }, [theme]);

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
