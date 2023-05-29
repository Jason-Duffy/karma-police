// React module imports.
import React from "react";
import { GiHandcuffs } from "react-icons/gi";
// Local imports.
import "./ArrestAction.css";
// Style imports.


const ArrestAction = ({ accentColor }) => (
    <div className="arrest flex">
        <GiHandcuffs color={accentColor} size="20" /> <span>Arrest This Man/Girl</span>
    </div>
);

export default ArrestAction;