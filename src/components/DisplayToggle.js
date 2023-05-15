import React, { useState, useContext } from 'react';
//import { ThemeContext } from './ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";
import '../stylesheets/DisplayToggle.css';

const Icon = ({ darkMode, toggleDarkMode }) => {
    return (
        darkMode ? 
            <FaMoon color='#D9D9D9' onClick={toggleDarkMode} size={23} /> 
        : 
            <FaSun color='#F2CA00' onClick={toggleDarkMode} size={23} />
    );
}

const DisplayToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Icon className="icon" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    );
}

export default DisplayToggle;
