import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import radiohead from '../../../../../assets/data/offlinePosts/radiohead.json';
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
});