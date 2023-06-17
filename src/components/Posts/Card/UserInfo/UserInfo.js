// React module imports.
import React from "react";
import { FaUserCircle } from "react-icons/fa";
// Local imports.
import { useThemeColors } from "../../../../hooks/themeHooks";
// Style imports.
import "./UserInfo.css";


const UserInfo = ({ post }) => {

    const {
        userData: {
            pfp,
            username
        }
    } = post;

    // Get theme colors. 
    const themeColors = useThemeColors();
    const accentColor = themeColors.accent;


    const imageUrl = pfp;
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
                <FaUserCircle data-testid="user-icon" color={accentColor} size={iconSize} />
            )}
            <p className="username">{username}</p>
        </div>
    );
};

export default UserInfo;