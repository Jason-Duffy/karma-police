import React from "react";
import '../stylesheets/Sort.css';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, themeColors } from '../redux/themeSlice'; 
import { setSortOrder, selectSort } from "../redux/sortSlice";

const Sort = () => {
    const theme = useSelector(selectTheme); // get the current theme
    const accentColor = themeColors[theme].accent;

    const dispatch = useDispatch();
    const sortMethod = useSelector(selectSort); // get the current sort order

    const changeSortMethod = (method) => () => {
        dispatch(setSortOrder(method));
    };

    return (
        <div className="sort">
            <p>Sort by Karma</p>
            <div className="arrows">
                <FaArrowCircleDown
                    className={`down-arrow ${sortMethod === 'descending' ? 'selected' : ''}`}
                    size={40}
                    color={accentColor}
                    onClick={changeSortMethod('descending')}
                />
                <FaArrowCircleUp
                    className={`up-arrow ${sortMethod === 'ascending' ? 'selected' : ''}`}
                    size={40}
                    color={accentColor}
                    onClick={changeSortMethod('ascending')}
                />
            </div>
        </div>
    );
};


export default Sort;
