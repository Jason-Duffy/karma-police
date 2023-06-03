// React module imports.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
// Local imports.
import { useThemeColors } from "../../../../hooks/themeHooks";
import { fetchUserData, selectUserData } from "../../../../redux/userSlice";
// Style imports.
import "./UserInfo.css";


const UserInfo = ({ post }) => {

    // Get theme colors. 
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;

    // Fetch user data and save to redux store. 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData(post.username));
    }, [dispatch, post.username]);

    const userData = useSelector((state) => selectUserData(state, post.username));

    const imageUrl = userData && userData.pfp;
    const shortUrl = imageUrl && imageUrl.split("?")[0];
    const imageSize = '40px';
    const iconSize = "40";


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
                <FaUserCircle color={accentColor} size={iconSize} />
            )}
            <p className="username">{post.username}</p>
        </div>
    );
};

export default UserInfo;