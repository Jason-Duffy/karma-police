import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import radiohead from '../../../../../assets/data/offlinePosts/radiohead.json';
import chemicalReactionGifs from '../../../../../assets/data/offlinePosts/chemicalreactiongifs.json';
import softwareGore from '../../../../../assets/data/offlinePosts/softwaregore.json';
import pizzaCrimes from '../../../../../assets/data/offlinePosts/PizzaCrimes.json';
import PostMedia from './PostMedia';
import store from '../../../../../redux/store';

const mockPost1 = radiohead.subredditData[4];

describe('PostMedia component', () => {
    test('should render PostMedia component', () => {
        const { container } = render(
            <Provider store={store}>
                <PostMedia post={mockPost1} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should remove escaped encoding from urls', () => {
        let newMockPost = radiohead.subredditData[2];
        newMockPost.url = 'https://example-url.com/extra?encodings=true&amp;link=messy';
        render(
            <Provider store={store}>
                <PostMedia post={newMockPost} />
            </Provider>
        )
        const linkElement = screen.getByTestId('link');
        const href = linkElement.getAttribute('href');
        expect(href).toBe('https://example-url.com/extra?encodings=true&link=messy');
    });

    test('should correctly classify and render reddit video', () => {
        const newMockPost = chemicalReactionGifs.subredditData[0];
        render(
            <Provider store={store}>
                <PostMedia post={newMockPost} />
            </Provider>
        )
        const linkElement = screen.queryByTestId('reddit_video');
        const src = linkElement && linkElement.getAttribute('src');
        expect(src).not.toBeNull();
    });

    test('should correctly classify and render an image', () => {
        const newMockPost = softwareGore.subredditData[0];
        render(
            <Provider store={store}>
                <PostMedia post={newMockPost} />
            </Provider>
        )
        const linkElement = screen.queryByTestId('image');
        const src = linkElement && linkElement.getAttribute('src');
        expect(src).not.toBeNull();
    });

    test('should correctly classify and render an image gallery', () => {
        const newMockPost = pizzaCrimes.subredditData[8];
        render(
            <Provider store={store}>
                <PostMedia post={newMockPost} />
            </Provider>
        )
        const galleryElement = screen.queryByTestId('image-gallery');
        expect(galleryElement).not.toBeNull();
    });

    test('should handle crossposts', () => {
        const newMockPost = pizzaCrimes.subredditData[20];
        render(
            <Provider store={store}>
                <PostMedia post={newMockPost} />
            </Provider>
        )
        const imageElement = screen.getByTestId("image");
        const src = imageElement.getAttribute('src');
        expect(src).not.toBeNull();
    });
});