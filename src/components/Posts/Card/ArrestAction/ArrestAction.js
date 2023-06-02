// React module imports.
import React from "react";
import { GiHandcuffs } from "react-icons/gi";
// Local imports.
import "./ArrestAction.css";
// Style imports.


const ArrestAction = ({ accentColor }) => {

    const iconSize = "40";
    return (
        <div className="arrest">
        <GiHandcuffs className="cuffs" color={accentColor} size={iconSize} /> <span>Arrest This Man/Girl</span>
    </div>
    );
};

export default ArrestAction;