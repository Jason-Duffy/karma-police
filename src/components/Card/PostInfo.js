import React from "react";
import { FaYinYang, FaRegClock, FaRegComment } from "react-icons/fa";
import "../stylesheets/PostInfo.css";

const PostInfo = ({ postAuthorKarma, postAge, postComments, accentColor }) => (
    <div className="post-info">
        <div className="karma-score">
            <FaYinYang color={accentColor} size="20" /><span>{postAuthorKarma}</span>
        </div>
        <div className="post-age">
            <FaRegClock color={accentColor} size="20" /><span>{postAge} Hours</span>
        </div>
        <div className="post-comments">
            <FaRegComment color={accentColor} size="20" /><span>{postComments}</span>
        </div>
    </div>
);

export default PostInfo;