import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sortReducer from './sortSlice';
import subredditReducer from './subredditSlice';
import menuButtonReducer from './menuButtonSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    sort: sortReducer,
    subreddit: subredditReducer,
    menu: menuButtonReducer
  },
})
