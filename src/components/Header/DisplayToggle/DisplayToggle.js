// React module imports.
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon, FaSun } from "react-icons/fa";
// Local imports.
import { toggleTheme, selectTheme } from '../../../redux/themeSlice';
// Style imports.
import './DisplayToggle.css';


const Icon = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const toggleThemeMode = () => {
        dispatch(toggleTheme());
    };

    return (
        theme === 'dark' ?
            <FaMoon color='#D9D9D9' onClick={toggleThemeMode} size={23} />
            :
            <FaSun color='#F2CA00' onClick={toggleThemeMode} size={23} />
    );
}

const DisplayToggle = () => {

    return (
        <div className='theme-icon'>
            <Icon />
        </div>
    );
}

export default DisplayToggle;
