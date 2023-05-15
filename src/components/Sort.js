import React from "react";
import '../stylesheets/Sort.css';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Sort = () => {
    return (
        <div className="sort">
            <p>Sort by Karma</p>
            <div className="arrows">
                <FaArrowCircleDown className="down-arrow" size={40} color="#4578DE" />
                <FaArrowCircleUp className="up-arrow" size={40} color="#4578DE" />
            </div>
        </div>
    );
};

export default Sort;