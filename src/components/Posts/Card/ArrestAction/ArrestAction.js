// React module imports.
import React from "react";
import { useDispatch } from 'react-redux';
import { GiHandcuffs } from "react-icons/gi";
// Local imports.
import { addArrestedUser } from "../../../../redux/arrestedSlice";
import { useThemeColors } from "../../../../hooks/themeHooks";
// Style imports.
import "./ArrestAction.css";

const ArrestAction = ({ post }) => {
    const {
        userData: { username }
    } = post;

    const dispatch = useDispatch();

    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;

    const handleArrest = () => { 
        dispatch(addArrestedUser(username));
    }

    const iconSize = "40";
    return (
        <div className="arrest" onClick={handleArrest}>
            <GiHandcuffs className="cuffs" color={accentColor} size={iconSize} /> <span>Arrest This Man/Girl</span>
        </div>
    );
};

export default ArrestAction;
