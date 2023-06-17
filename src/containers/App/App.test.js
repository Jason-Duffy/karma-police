import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole, act } from '@testing-library/react';
import App from './App';
import store from '../../redux/store';
import { toggleMenuButtonState, closeMenu } from '../../redux/menuButtonSlice';

describe('App component', () => {

    test('should render App component', () => {
        const { container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('page behind menu should blur when menu is open (mobile)', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const background1 = screen.getByTestId('main-content');
        const classList1 = background1.classList;
        expect(background1).toBeInTheDocument();
        expect(classList1.contains('main-content')).toBe(true);
        expect(classList1.length).toBe(1);

        // Clear state from last render()
        cleanup();

        // Toggle menu button state to "open" and re-render
        store.dispatch(toggleMenuButtonState());
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const background2 = screen.getByTestId('main-content');
        const classList2 = background2.classList;
        expect(background2).toBeInTheDocument();
        expect(classList2.contains('main-content')).toBe(true);
        expect(classList2.contains('blur')).toBe(true);
        expect(classList2.length).toBe(2);
    });
});