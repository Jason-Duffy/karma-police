import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuButton from './MenuButton';
import store from '../../../redux/store';

describe('MenuButton component', () => {
    test('should render MenuButton component', () => {
        const { container } = render(
            <Provider store={store}>
                <MenuButton />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
    })

    test('should toggle menu button state when clicked', () => {
        render(
            <Provider store={store}>
                <MenuButton />
            </Provider>
        );

        const button = screen.getByTestId('menu-button');
        fireEvent.click(button);
        const buttonState = store.getState().menu;
        expect(buttonState).toEqual('open');
    })
});