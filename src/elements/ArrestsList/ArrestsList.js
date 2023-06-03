// React module imports.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Local imports.
import { removeArrestedUser, selectArrestedUsers } from '../../redux/arrestedSlice';
import { useThemeObject } from '../../hooks/themeHooks';
// Style imports.
import './ArrestsList.css';

const ArrestsList = () => {

    const primaryText = useThemeObject("color", "primaryText")
    const secondaryText = useThemeObject("color", "secondaryText");
    const arrestedUsers = useSelector(selectArrestedUsers);
    const emptyMessage = arrestedUsers.length === 0 ? "No Users Currently Arrested" : "Tap Username to Release";

    // Use the useDispatch hook to get the dispatch function
    const dispatch = useDispatch();


    const handleRemoveUser = (user) => {
        dispatch(removeArrestedUser(user));
    }

    return (
        <div className='arrests-list-container'>
            <p className='empty-message' style={primaryText}>{emptyMessage}</p>
            <ul id="arrests-list" style={secondaryText}>
                {
                    arrestedUsers.map((user, i) => (
                        <div className='arrested-user-container'>
                            <li id="arrested-name" key={i} onClick={() => handleRemoveUser(user)}>{user}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default ArrestsList;
