import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserInfo = ({ username, accentColor }) => (
    <div className="user">
        <FaUserCircle color={accentColor} size="20" />
        <p className="username">{username}</p>
    </div>
);

export default UserInfo;