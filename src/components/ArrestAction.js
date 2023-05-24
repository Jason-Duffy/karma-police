import React from "react";
import { GiHandcuffs } from "react-icons/gi";
import "../stylesheets/ArrestAction.css";

const ArrestAction = ({ accentColor }) => (
    <div className="arrest">
        <GiHandcuffs color={accentColor} size="20" /> <span>Arrest This Man/Girl</span>
    </div>
);

export default ArrestAction;