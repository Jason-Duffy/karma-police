// React module imports.
import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
// Local imports.
import { useThemeColors } from "../../hooks/themeHooks";
import { setSortOrder, selectSort } from "../../redux/sortSlice";
// Style imports.
import './SortButtons.css';


const Sort = () => {

    // Get theme objects and variables
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;

    // Get and manage the current sort order
    const sortMethod = useSelector(selectSort);

    const dispatch = useDispatch();

    const changeSortMethod = (method) => () => {
        dispatch(setSortOrder(method));
    };

    return (
        <div
            data-testid="sortbuttons-1"
            className="arrows">
            <FaArrowCircleDown
                data-testid="down-arrow"
                className={`down-arrow ${sortMethod === 'descending' ? 'selected' : ''}`}
                size={40}
                color={accentColor}
                onClick={changeSortMethod('descending')}
            />
            <FaArrowCircleUp
                data-testid="up-arrow"
                className={`up-arrow ${sortMethod === 'ascending' ? 'selected' : ''}`}
                size={40}
                color={accentColor}
                onClick={changeSortMethod('ascending')}
            />
        </div>
    );
};


export default Sort;
