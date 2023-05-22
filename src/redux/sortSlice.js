import { createSlice } from '@reduxjs/toolkit';


const sortSlice = createSlice({
    name: 'sort',
    initialState: 'descending',
    reducers: {
        setSortOrder: (state, action) => action.payload,
    },
});

export const { setSortOrder } = sortSlice.actions;

export const selectSort = state => state.sort;

export default sortSlice.reducer;