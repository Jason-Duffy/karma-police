// React module imports.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Local imports.
import { removeArrestedUser, selectArrestedUsers, removeAllArrestedUsers } from '../../redux/arrestedSlice';
import { useThemeObject } from '../../hooks/themeHooks';
// Style imports.
import './ArrestsList.css';

const ArrestsList = () => {

    const primaryText = useThemeObject("color", "primaryText")
    const secondaryText = useThemeObject("color", "secondaryText");
    const buttonStyle = useThemeObject("backgroundColor", "accent");
    const buttonText = useThemeObject("color", "primaryText");
    const arrestedUsers = useSelector(selectArrestedUsers);
    const emptyMessage = arrestedUsers.length === 0 ? "No Users Currently Arrested" : "Tap Username to Release";

    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();


    const handleRemoveUser = (user) => {
        dispatch(removeArrestedUser(user));
    }

    const handleRemoveAllUsers = () => {
        dispatch(removeAllArrestedUsers());
    }

    return (
        <div className='arrests-list-container'>
            <p className='empty-message' style={primaryText}>{emptyMessage}</p>
            <ul id="arrests-list" style={secondaryText}>
                {
                    arrestedUsers.map((user, i) => (
                        <div key={i} className='arrested-user-container'>
                            <li id="arrested-name" onClick={() => handleRemoveUser(user)}>{user}</li>
                        </div>
                    ))
                }
            </ul>
            {
                arrestedUsers.length > 1 ?
                    <button
                        id="release-all"
                        type="button"
                        style={buttonStyle}
                        onClick={handleRemoveAllUsers}
                    >
                        <span id="release-all-button-label" style={buttonText}>Release All Users</span>
                    </ button>
                    : <></>}
        </div>
    );
};

export default ArrestsList;
