// React module imports.
import React from "react";
import { FaYinYang, FaRegClock, FaRegComment } from "react-icons/fa";
// Local imports.
// Style imports.
import "./PostInfo.css";


const PostInfo = ({ postAuthorKarma, postAge, postComments, accentColor }) => (
    <div className="post-info flex">
        <div className="karma-score flex">
            <FaYinYang color={accentColor} size="20" /><span>{postAuthorKarma}</span>
        </div>
        <div className="post-age flex">
            <FaRegClock color={accentColor} size="20" /><span>{postAge} Hours</span>
        </div>
        <div className="post-comments flex">
            <FaRegComment color={accentColor} size="20" /><span>{postComments}</span>
        </div>
    </div>
);

export default PostInfo;