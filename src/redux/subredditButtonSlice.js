import { createSlice } from '@reduxjs/toolkit';

const subredditButtonSlice = createSlice({
    name: 'subredditButton',
    initialState: 'closed',
    reducers: {
        toggleSubredditButtonState: (state) => state === 'closed' ? 'open' : 'closed',
        closeSubredditButton: () => 'closed'
    },
});

export const { toggleSubredditButtonState, closeSubredditButton } = subredditButtonSlice.actions;

export const selectSubredditButtonState = state => state.subredditButton;

export default subredditButtonSlice.reducer;
