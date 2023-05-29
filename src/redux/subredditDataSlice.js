// subredditDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const subredditDataSlice = createSlice({
  name: 'subredditData',
  initialState: [],
  reducers: {
    setSubredditData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSubredditData } = subredditDataSlice.actions;

export const selectSubredditData = state => state.subredditData;

export default subredditDataSlice.reducer;
