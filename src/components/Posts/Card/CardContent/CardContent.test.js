import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import pizzaCrimes from '../../../../assets/data/offlinePosts/PizzaCrimes.json';
import CardContent from './CardContent';
import store from '../../../../redux/store';

const mockPost = pizzaCrimes.subredditData[1];

describe('CardContent component', () => {
    test('should render CardContent component', () => {
        const { container } = render(
            <Provider store={store}>
                <CardContent post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should render poll data as list with a link to poll on reddit', () => {
        render(
            <Provider store={store}>
                <CardContent post={mockPost} />
            </Provider>
        )
        const listElement = screen.getAllByTestId('list-item');
        expect(listElement[0]).toContainHTML('<li data-testid="list-item">Yes, extend indefinitely</li>');
        const postTextElement = screen.getByTestId('post-text');
        const innerHtml = postTextElement.innerHTML;
        expect(innerHtml).toContain('View Poll');
        expect(innerHtml).toContain('href="https://www.reddit.com/poll/149r8kl"');
    });
});