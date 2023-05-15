import React from "react";
import '../stylesheets/Card.css';
import { FaUserCircle, FaYinYang, FaRegClock, FaRegComment } from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";
import sampleImage from '../images/istockphoto-1347249753-2048x2048.jpg';


const username = "User65529";
const postTitle = "Witty Post Title";
const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const postAuthorKarma = 227;
const postAge = 14;
const postComments = 45;


const Card = () => {
    return (
        <div className="card-container">
            <div class="user">
                <FaUserCircle color="#C7C6C6" size="20" />
                <p className="username" >{username}</p>
            </div>
            <div className="card">
                <p className="post-title">{postTitle}</p>
                <img
                    className="post-image"
                    src={sampleImage}
                    alt="example"
                />
                <p className="post-text">{postText}</p>
                <div className="post-info">
                    <div className="karma">
                        <FaYinYang color="#C7C6C6" size="20" /><span>{postAuthorKarma}</span>
                    </div>
                    <div className="post-age">
                        <FaRegClock color="#C7C6C6" size="20" /><span>{postAge} Hours</span>
                    </div>
                    <div className="post-comments">
                        <FaRegComment color="#C7C6C6" size="20" /><span>{postComments}</span>
                    </div>
                </div>
            </div>
            <div class="arrest">
                <GiHandcuffs color="#C7C6C6" size="20" /> <span>Arrest this man/girl</span>
            </div>
        </div>
    );
};

export default Card;