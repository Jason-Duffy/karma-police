import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SubredditList from './SubredditList';
import subredditList from '../../assets/data/subreddits.json';
import store from '../../redux/store';


describe('SubredditList component', () => {
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

    test('should render the correct number of list items', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SubredditList />
                </Router>
            </Provider>
        );
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(subredditList.length);
    });

    test('should render active link on click', () => {
        const subreddit = 'r/radiohead';
        render(
            <Provider store={store}>
                <Router>
                    <SubredditList />
                </Router>
            </Provider>
        );
        const subredditLink = screen.getByText(subreddit);
        fireEvent.click(subredditLink);
        expect(subredditLink).toHaveClass('active');
    });
});
