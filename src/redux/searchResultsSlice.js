import { createSlice } from '@reduxjs/toolkit';

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    results: [],
    noResults: false,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload;
      state.noResults = action.payload.length === 0;
    },
    clearSearchResults: (state) => {
      state.results = [];
      state.noResults = false;
    }
  },
});

export const { setSearchResults, clearSearchResults } = searchResultsSlice.actions;

export const selectSearchResults = state => state.searchResults.results;

export const selectNoResults = state => state.searchResults.noResults;

export default searchResultsSlice.reducer;
