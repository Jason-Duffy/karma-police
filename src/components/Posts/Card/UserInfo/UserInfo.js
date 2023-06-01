// React module imports.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
// Local imports.
import { fetchUserData, selectUserData } from "../../../../redux/userSlice";
// Style imports.
import "./UserInfo.css";

/*
username: name,
karma: total_karma,
pfp: icon_img
*/


const UserInfo = ({ username, accentColor }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData(username));
    }, [dispatch, username]);

    const userData = useSelector((state) => selectUserData(state, username));

    const imageUrl = userData && userData.pfp;
    const shortUrl = imageUrl && imageUrl.split("?")[0];
    const imageSize = '40px';


    return (
        <div className="user">
            {imageUrl ? (
                <img
                    className="user-pfp"
                    src={shortUrl}
                    alt="Post Author PfP"
                    width={imageSize}
                    height={imageSize}>
                </img>
            ) : (
                <FaUserCircle color={accentColor} size="40" />
            )}
            <p className="username">{username}</p>
        </div>
    );
};

export default UserInfo;