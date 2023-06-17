import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import pizzaCrimes from '../../../../assets/data/offlinePosts/PizzaCrimes.json';
import PostInfo from './PostInfo';
import store from '../../../../redux/store';

const mockPost = pizzaCrimes.subredditData[1];

// Helper functions to return time in seconds
const days = (count) => count * 24 * 60 * 60;
const hours = (count) => count * 60 * 60;
const minutes = (count) => count * 60;
const seconds = (count) => count;

describe('PostInfo component', () => {
    test('should render PostInfo component', () => {
        const { container } = render(
            <Provider store={store}>
                <PostInfo post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('post age should have days unit label where appropriate', () => {
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        newMockPost.created = currentTime - days(1);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        const postAgeElement = screen.getByTestId('post-age');
        const age = postAgeElement.innerHTML;
        expect(age).toContain('Day');
        expect(age).not.toContain('Hour');
        expect(age).not.toContain('Minute');
        expect(age).not.toContain('Second');
    });

    test('post age should have hours unit label where appropriate', () => {
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        newMockPost.created = currentTime - hours(1);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        const postAgeElement = screen.getByTestId('post-age');
        const age = postAgeElement.innerHTML;
        expect(age).toContain('Hour');
        expect(age).not.toContain('Day');
        expect(age).not.toContain('Minute');
        expect(age).not.toContain('Second');
    });

    test('post age should have minutes unit label where appropriate', () => {
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        newMockPost.created = currentTime - minutes(1);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        const postAgeElement = screen.getByTestId('post-age');
        const age = postAgeElement.innerHTML;
        expect(age).toContain('Minute');
        expect(age).not.toContain('Day');
        expect(age).not.toContain('Hour');
        expect(age).not.toContain('Second');
    });

    test('post age should have seconds unit label where appropriate', () => {
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        newMockPost.created = currentTime - seconds(1);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        const postAgeElement = screen.getByTestId('post-age');
        const age = postAgeElement.innerHTML;
        expect(age).toContain('Second');
        expect(age).not.toContain('Day');
        expect(age).not.toContain('Hour');
        expect(age).not.toContain('Minute');
    });

    test('post age unit label has correct pluralisation', () => {
        // Setup timestamp.
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        // Render initial case of multiple days
        newMockPost.created = currentTime - days(2);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        let postAgeElement = screen.getByTestId('post-age');
        let age = postAgeElement.innerHTML;
        // Assertion for multiple days case
        expect(age).toContain('Days');
        // Clear data from render()
        cleanup();

        // Render second case of singular day
        newMockPost.created = currentTime - days(1);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        postAgeElement = screen.getByTestId('post-age');
        age = postAgeElement.innerHTML;
        // Assertions for single day
        expect(age).toContain('Day');
        expect(age).not.toContain('Days');
    });

    test('post age is calculated correctly', () => {
        let newMockPost = mockPost;
        let currentTime = Date.now();
        currentTime /= 1000;
        newMockPost.created = currentTime - minutes(15);
        render(
            <Provider store={store}>
                <PostInfo post={newMockPost} />
            </Provider>
        )
        const postAgeElement = screen.getByTestId('post-age');
        const age = postAgeElement.innerHTML;
        expect(age).toBe('15 Minutes');
    });

    test('karma score is rendered', () => {
        render(
            <Provider store={store}>
                <PostInfo post={mockPost} />
            </Provider>
        )
        const karmaScoreElement = screen.getByTestId('karma-score');
        const karma = parseInt(karmaScoreElement.innerHTML, 10);
        expect(karma).toEqual(mockPost.userData.karma);
    });

    test('post comments count is rendered', () => {
        render(
            <Provider store={store}>
                <PostInfo post={mockPost} />
            </Provider>
        )
        const postCommentsElement = screen.getByTestId('post-comments');
        const comments = parseInt(postCommentsElement.innerHTML, 10);
        expect(comments).toBe(mockPost.comments);
    });
});
