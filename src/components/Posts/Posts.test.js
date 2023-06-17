import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import Posts from './Posts';
import store from '../../redux/store';

describe('Posts component', () => {

    test('should render Posts component', () => {
        const { container } = render(
            <Provider store={store}>
                <Posts />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
    });

    test('', () => {
        // Additional tests...
    });

    test('', () => {
        // Additional tests...
    });

    test('', () => {
        // Additional tests...
    });
});
