import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";
import '../stylesheets/DisplayToggle.css';

const Icon = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        darkMode ?
            <FaMoon color='#D9D9D9' onClick={toggleDarkMode} size={23} />
            :
            <FaSun color='#F2CA00' onClick={toggleDarkMode} size={23} />
    );
}

const DisplayToggle = () => {

    return (
        <Icon className="icon" />
    );
}

export default DisplayToggle;
