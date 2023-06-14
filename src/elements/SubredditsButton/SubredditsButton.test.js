import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SubredditsButton from './SubredditsButton';
import store from '../../redux/store';

describe('SubredditsButton component', () => {
    test('should render SubredditsButton component', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SubredditsButton />
                </Router>
            </Provider>
        );
        const subredditsButtonElement = screen.getByTestId('subredditsButton-1');
        expect(subredditsButtonElement).toBeInTheDocument();
    });

    test('should toggle subreddit button state when clicked', async () => {
        render(
            <Provider store={store}>
                <Router>
                    <SubredditsButton />
                </Router>
            </Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const buttonState = store.getState().subredditButton;
        expect(buttonState).toEqual('open');
    });
});
