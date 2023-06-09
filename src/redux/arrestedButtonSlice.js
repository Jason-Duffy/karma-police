import { createSlice } from '@reduxjs/toolkit';

const arrestedButtonSlice = createSlice({
    name: 'arrestedButton',
    initialState: 'closed',  // assuming the button starts off in the 'off' state
    reducers: {
        toggleArrestedButtonState: (state) => state === 'closed' ? 'open' : 'closed',
        closeArrestedButton: () => 'closed'
    },
});

export const { toggleArrestedButtonState, closeArrestedButton } = arrestedButtonSlice.actions;

export const selectArrestedButtonState = state => state.arrestedButton;

export default arrestedButtonSlice.reducer;
