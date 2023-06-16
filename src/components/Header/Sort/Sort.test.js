import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import Sort from './Sort';
import store from '../../../redux/store';

describe('Sort component', () => {
    test('should render Sort component', () => {
        const { container } = render(
            <Provider store={store}>
                <Sort />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
        const sortLabel = screen.getByText('Sort by Karma');
        expect(sortLabel).toBeInTheDocument();
    });
});