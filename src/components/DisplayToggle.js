import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '../redux/themeSlice';
import { FaMoon, FaSun } from "react-icons/fa";
import '../stylesheets/DisplayToggle.css';

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
        <Icon className="icon" />
    );
}

export default DisplayToggle;
