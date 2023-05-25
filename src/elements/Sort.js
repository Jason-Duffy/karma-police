import React from "react";
import '../stylesheets/Sort.css';
import { useThemeObject, useThemeColors } from "../hooks/themeHooks";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder, selectSort } from "../redux/sortSlice";

const Sort = () => {

    // Get theme objects and variables
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;
    const background = useThemeObject("backgroundColor", "border");
    const primaryText = useThemeObject("color", "primaryText");

    // Get and manage the current sort order
    const sortMethod = useSelector(selectSort);

    const dispatch = useDispatch();

    const changeSortMethod = (method) => () => {
        dispatch(setSortOrder(method));
    };

    return (
        <div className="sort" style={background}>
            <p id="sort-label" style={primaryText}>Sort by Karma</p>
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
