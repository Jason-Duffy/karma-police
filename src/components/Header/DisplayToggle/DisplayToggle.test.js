import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import DisplayToggle from './DisplayToggle';
import store from '../../../redux/store';

describe('DisplayToggle component', () => {
    test('should render DisplayToggle component', () => {
        const { container } = render(
            <Provider store={store}>
                <DisplayToggle />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    test('theme in redux state should change when clicked', () => {
        render(
            <Provider store={store}>
                <DisplayToggle />
            </Provider>
        )
        const button = screen.getByTestId('moon-icon');
        fireEvent.click(button);
        const theme = store.getState().theme.value;
        expect(theme).toEqual('light');
    });

    test('icon changes when theme is changed', () => {
        render(
            <Provider store={store}>
                <DisplayToggle />
            </Provider>
        )
        // Starts in light mode from previous test
        const sunIcon = screen.getByTestId('sun-icon');
        expect(sunIcon).toBeInTheDocument();
        // Simulate click
        const button = screen.getByTestId('sun-icon');
        fireEvent.click(button);
        // Should now be in dark mode
        const moonIcon = screen.getByTestId('moon-icon');
        expect(moonIcon).toBeInTheDocument();
    });
});