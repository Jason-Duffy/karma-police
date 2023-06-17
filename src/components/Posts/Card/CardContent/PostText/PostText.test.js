import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import PostText from './PostText';
import store from '../../../../../redux/store';



describe('PostText component', () => {
    test('should render PostText component', () => {
        const mockPost = { postText: 'Lorum Ipsum' };
        const { container } = render(
            <Provider store={store}>
                <PostText post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
        const textElement = screen.getByText('Lorum Ipsum');
        expect(textElement).not.toBeNull();
    });

    test('links in html text should open in new tab', () => {
        const mockPost = {
            postText: '<a href="https://www.reddit.com/r/PizzaCrimes/">Reddit Link</a>'
        };
        render(
            <Provider store={store}>
                <PostText post={mockPost} />
            </Provider>
        )
        const textElement = screen.getByTestId('post-text');
        const innerHtml = textElement.innerHTML;
        expect(innerHtml).toContain('target="_blank"');
    });

    test('relative links in html should be given reddit base url', () => {
        const mockPost = {
            postText: '<a href="r/PizzaCrimes/">Relative Reddit Link</a>'
        };
        render(
            <Provider store={store}>
                <PostText post={mockPost} />
            </Provider>
        )
        const textElement = screen.getByTestId('post-text');
        const innerHtml = textElement.innerHTML;
        expect(innerHtml).toContain("https://www.reddit.com/r/PizzaCrimes/");
    });

    test('links containing dangerous html tags should be sanitised', () => {
        const mockPost = {
            postText: '<script> Some Malicions Code </script> <span>Some Safe Text</span>'
        };
        render(
            <Provider store={store}>
                <PostText post={mockPost} />
            </Provider>
        )
        const textElement = screen.getByTestId('post-text');
        const innerHtml = textElement.innerHTML;
        expect(innerHtml).not.toContain("Some Malicious Code");
        expect(innerHtml).toBe("<span>Some Safe Text</span>");
    })

    test('links containing escaped character encodings should be decoded', () => {
        const mockPost = {
            postText: '&lt;span&gt;Some Safe Text&lt;/span&gt;'
        };
        render(
            <Provider store={store}>
                <PostText post={mockPost} />
            </Provider>
        )
        const textElement = screen.getByTestId('post-text');
        const innerHtml = textElement.innerHTML;
        expect(innerHtml).toBe("<span>Some Safe Text</span>");
    })
});