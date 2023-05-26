import { createSlice } from '@reduxjs/toolkit';

const subredditButtonSlice = createSlice({
    name: 'subredditButton',
    initialState: 'closed',  // assuming the button starts off in the 'off' state
    reducers: {
        toggleSubredditButtonState: (state) => state === 'closed' ? 'open' : 'closed',
    },
});

export const { toggleSubredditButtonState } = subredditButtonSlice.actions;

export const selectSubredditButtonState = state => state.subredditButton;

export default subredditButtonSlice.reducer;
