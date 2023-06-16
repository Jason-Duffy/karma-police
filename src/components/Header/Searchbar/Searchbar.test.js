import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import Searchbar from './Searchbar';
import store from '../../../redux/store';

describe('Serachbar component', () => {
    test('should render Searchbar component', () => {
        const { container } = render(
            <Provider store={store}>
                <Searchbar />
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
        const inputElement = screen.getByRole('searchbox');
        const submitButton = screen.getByRole('button', { name: /search/i });

        expect(inputElement).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('input value should be updated on change', () => {
        render(
            <Provider store={store}>
                <Searchbar />
            </Provider>
        );
        const inputElement = screen.getByRole('searchbox');

        fireEvent.change(inputElement, { target: { value: 'example search' } });
        expect(inputElement.value).toBe('example search');
    })
});