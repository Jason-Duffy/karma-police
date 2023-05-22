import React from "react";
import '../stylesheets/Sort.css';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Sort = () => {

    const accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color');

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