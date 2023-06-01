import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sortReducer from './sortSlice';
import subredditReducer from './subredditSlice';
import menuButtonReducer from './menuButtonSlice';
import subredditButtonReducer from './subredditButtonSlice';
import subredditDataReducer from './subredditDataSlice';
import userReducer from './userSlice';


export default configureStore({
  reducer: {
    theme: themeReducer,
    sort: sortReducer,
    subreddit: subredditReducer,
    menu: menuButtonReducer,
    subredditButton: subredditButtonReducer,
    subredditData: subredditDataReducer,
    user: userReducer
  },
})
