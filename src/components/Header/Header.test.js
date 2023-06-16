import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import Header from './Header';
import store from '../../redux/store';

describe('Header component', () => {
    test('should render Header component', () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });
});