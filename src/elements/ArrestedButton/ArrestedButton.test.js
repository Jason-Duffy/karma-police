import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import ArrestedButton from './ArrestedButton';
import store from '../../redux/store';

describe('ArrestedButton component', () => {
    test('should render ArrestedButton component', () => {
        const { container } = render(
            <Provider store={store}>
                <ArrestedButton />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    test('clicking button should toggle button state', () => {
        render(
            <Provider store={store}>
                <ArrestedButton />
            </Provider>
        );
        const button = screen.getByTestId('arrested-button');
        fireEvent.click(button);
        const buttonState = store.getState().arrestedButton;
        expect(buttonState).toEqual('open');
    });
}); 