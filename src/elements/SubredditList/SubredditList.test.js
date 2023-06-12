import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import SubredditList from './SubredditList';
import store from '../../redux/store';


test('should render subredditList component', () => {
    render(
        <Provider store={store}>
            <Router>
                <SubredditList />
            </Router>
        </Provider>
    );
    const subredditListElement = screen.getByTestId('subredditList-1');
    expect(subredditListElement).toBeInTheDocument();
})