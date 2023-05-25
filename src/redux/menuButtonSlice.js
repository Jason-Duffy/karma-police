import { createSlice } from '@reduxjs/toolkit';


const menuButtonSlice = createSlice({
    name: 'menuButton',
    initialState: 'closed',
    reducers: {
        toggleMenuButtonState: (state) => state === 'closed' ? 'open' : 'closed',
    },
});

export const { toggleMenuButtonState } = menuButtonSlice.actions;

export const selectMenuButtonState = state => state.menu;

export default menuButtonSlice.reducer;