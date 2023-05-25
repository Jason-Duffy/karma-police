// React module imports.
import React from "react";
import { FaUserCircle } from "react-icons/fa";
// Local imports.
// Style imports.
import "./UserInfo.css";


const UserInfo = ({ username, accentColor }) => (
    <div className="user flex">
        <FaUserCircle color={accentColor} size="20" />
        <p className="username">{username}</p>
    </div>
);

export default UserInfo;