import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import pizzaCrimes from '../../../../assets/data/offlinePosts/PizzaCrimes.json';
import UserInfo from './UserInfo';
import store from '../../../../redux/store';

const mockPost = pizzaCrimes.subredditData[0];

describe('UserInfo component', () => {
    test('should render UserInfo component', () => {
        const { container } = render(
            <Provider store={store}>
                <UserInfo post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('should shorten pfp url by removing query strings where necessary', () => {
        render(
            <Provider store={store}>
                <UserInfo post={mockPost} />
            </Provider>
        )
        const imageElement = screen.getByRole('img');
        const src = imageElement.getAttribute('src');
        expect(mockPost.userData.pfp).toContain('?');
        expect(src).not.toContain('?');
    });

    test('profile image should be rendered where available', () => {
        render(
            <Provider store={store}>
                <UserInfo post={mockPost} />
            </Provider>
        )
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    });

    test('user icon should be rendered when profile image not available', () => {
        let newMockPost = mockPost;
        newMockPost.userData.pfp = null;
        render(
            <Provider store={store}>
                <UserInfo post={newMockPost} />
            </Provider>
        )
        const imageElement = screen.queryByRole('img');
        expect(imageElement).not.toBeInTheDocument();
        const iconElement = screen.getByTestId('user-icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('username should be rendered', () => {
        render(
            <Provider store={store}>
                <UserInfo post={mockPost} />
            </Provider>
        )
        const usernameElement = screen.getByText(mockPost.userData.username);
        const usernameHtml = usernameElement.innerHTML;
        expect(usernameHtml).toBe(mockPost.userData.username);
    });
});