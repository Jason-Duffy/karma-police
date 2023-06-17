import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import Sidebar from './Sidebar';
import store from '../../redux/store';

describe('Sidebar component', () => {
    test('should render Sidebar component', () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Sidebar />
                </Router>
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });
});