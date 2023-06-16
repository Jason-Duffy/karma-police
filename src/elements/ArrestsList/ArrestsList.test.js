import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import ArrestsList from './ArrestsList';
import { configureStore } from '@reduxjs/toolkit';
import arrestedSlice from '../../redux/arrestedSlice';


const store = configureStore({
    reducer: {
        arrested: arrestedSlice.reducer,
        theme: {
            value: 'dark',
        },
    },
});


jest.mock('../../hooks/themeHooks', () => ({
    useThemeColors: jest.fn().mockReturnValue({
        background: '#1C1E26',
        primaryText: '#ECEFF4',
        secondaryText: '#88C0D0',
        accent: '#BF616A',
        border: '#4C566A',
    }),
    useThemeObject: jest.fn().mockReturnValue({}),
}));

describe('ArrestsList component', () => {
    test('should render ArrestsList component', () => {
        const { container } = render(
            <Provider store={store}>
                <ArrestsList />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should render no arrested users message when array is empty', () => {
        render(
            <Provider store={store}>
                <ArrestsList />
            </Provider>
        );
        expect(screen.getByText('No Users Currently Arrested')).toBeInTheDocument();
    });
/*
    test('arrested users are displayed as list items', async () => {
        store.dispatch(addArrestedUser('user1'));
        store.dispatch(addArrestedUser('user2'));
        store.dispatch(addArrestedUser('user3'));
        render(
            <Provider store={store}>
                <ArrestsList />
            </Provider>
        );
        // Wait for the list items to appear asynchronously
        const user1 = await screen.findByText('user1');
        const user2 = await screen.findByText('user2');
        const user3 = await screen.findByText('user3');

        // Assert that each arrested user is displayed as a list item
        expect(user1).toBeInTheDocument();
        expect(user2).toBeInTheDocument();
        expect(user3).toBeInTheDocument();
    });
    */
});
