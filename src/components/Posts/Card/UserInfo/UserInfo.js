// React module imports.
import React from "react";
import { FaUserCircle } from "react-icons/fa";
// Local imports.
// Style imports.
import "./UserInfo.css";


const UserInfo = ({ username, accentColor }) => {

    const fetchPostAuthorData = async (username) => {
        try {
            const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
            const data = await response.json();
            const newUserData = data.data;

            return newUserData;


        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle error appropriately
        }
    };

    // TODO: replace dummy value with parapeter passed in. 
    username = "corwood";
    fetchPostAuthorData(username)
        .then((userData) => {
            console.log(userData);
            // Process the user data as needed
        })
        .catch((error) => {
            console.error(error);
            // Handle error appropriately
        });

    return (
        <div className="user flex">
            <FaUserCircle color={accentColor} size="20" />
            <p className="username">{username}</p>
        </div>
    )
};

export default UserInfo;