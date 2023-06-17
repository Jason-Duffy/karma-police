import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import pizzaCrimes from '../../../assets/data/offlinePosts/PizzaCrimes.json';
import Card from './Card';
import store from '../../../redux/store';

const mockPost = pizzaCrimes.subredditData[0];

describe('Card component', () => {
    test('should render Card component', () => {
        const { container } = render(
            <Provider store={store}>
                <Card post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });
});