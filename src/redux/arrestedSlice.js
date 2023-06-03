import { createSlice } from '@reduxjs/toolkit';

const arrestedSlice = createSlice({
    name: 'arrested',
    initialState: [],
    reducers: {
        addArrestedUser: (state, action) => {
            // Add a specified user tp the array.
            state.push(action.payload);
        },
        removeArrestedUser: (state, action) => {
            // Return a new state array that doesn't include the user specified in the payload
            return state.filter(user => user !== action.payload);
        },
        removeAllArrestedUsers: () => {
            // Reset state to its initial value
            return [];
        },
    },
});

export const { addArrestedUser, removeArrestedUser, removeAllArrestedUsers } = arrestedSlice.actions;

export const selectArrestedUsers = state => state.arrested;

export default arrestedSlice.reducer;
