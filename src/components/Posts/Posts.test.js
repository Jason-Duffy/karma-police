import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import Posts from './Posts';
import store from '../../redux/store';

describe('Posts component', () => {
    test('should render Posts component', () => {
        const { container } = render(
            <Provider store={store}>
                <Posts />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('', () => {

    });

    test('', () => {

    });

    test('', () => {

    });
});