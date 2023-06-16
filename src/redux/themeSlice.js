import { createSlice } from '@reduxjs/toolkit';

export const themeColors = {
    light: {
        background: '#ECEFF4',
        primaryText: '#2E3440',
        secondaryText: '#4C566A',
        accent: '#D08770',
        border: '#D8DEE9'
    },
    dark: {
        background: '#1C1E26',
        primaryText: '#ECEFF4',
        secondaryText: '#88C0D0',
        accent: '#BF616A',
        border: '#4C566A'
    }
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: 'dark' },
    reducers: {
        toggleTheme: state => {
            state.value = state.value === 'dark' ? 'light' : 'dark';
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme?.value;

export default themeSlice.reducer;