import { createSlice } from '@reduxjs/toolkit';

const arrestedSlice = createSlice({
  name: 'arrested',
  initialState: {
    arrestedUsers: [],
  },
  reducers: {
    addArrestedUser: (state, action) => {
      state.arrestedUsers.push(action.payload);
    },
    removeArrestedUser: (state, action) => {
      state.arrestedUsers = state.arrestedUsers.filter(user => user !== action.payload);
    },
    removeAllArrestedUsers: state => {
      state.arrestedUsers = [];
    },
  },
});

export const { addArrestedUser, removeArrestedUser, removeAllArrestedUsers } = arrestedSlice.actions;

export const selectArrestedUsers = state => state.arrested?.arrestedUsers || [];

export default arrestedSlice.reducer;
