import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: {},
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { username, karma, pfp } = action.payload;
            state.users[username] = { karma, pfp };
        },
    },
});

export const { setUserData } = userSlice.actions;


export const selectUserData = (state, username) => state.user.users[username];

export const fetchUserData = (username) => async (dispatch) => {
    try {
      const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
      const data = await response.json();
      const newUserData = data.data;
      dispatch(setUserData({ username: newUserData.name, karma: newUserData.total_karma, pfp: newUserData.icon_img }));
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error appropriately
    }
  };
  

export default userSlice.reducer;