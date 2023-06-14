import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import RedirectToDefaultSubreddit from './RedirectToDefaultSubreddit';
import store from '../../redux/store';

describe('RedirectToDefaultSubreddit component', () => {
    test('component does not render anything', () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <RedirectToDefaultSubreddit />
                </Router>
            </Provider>
        );
        expect(container.firstChild).toBeNull();
    })
});