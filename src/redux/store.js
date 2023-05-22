import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sortReducer from './sortSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    sort: sortReducer
  },
})
