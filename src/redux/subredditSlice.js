import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: 'r/radiohead',
    reducers: {
        setSubreddit: (state, action) => action.payload,
    },
});

export const { setSubreddit } = subredditSlice.actions;

export const selectSubreddit = state => state.subreddit;

export default subredditSlice.reducer;