import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import store from '../../redux/store';


describe('Posts component', () => {
    test('should render Posts component', () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Posts />
                </Router>
            </Provider>
        );
        expect(container.firstChild).toBeInTheDocument();
        const postsElement = screen.getByTestId('posts-component');
        expect(postsElement).toBeInTheDocument();
    });
});
