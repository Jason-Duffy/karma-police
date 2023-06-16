import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import ArrestAction from './ArrestAction';
import store from '../../../../redux/store';

const mockPost = {
    userData: {
        username: 'example-user'
    }
}

describe('ArrestAction component', () => {
    test('should render ArrestAction component', () => {
        const { container } = render(
            <Provider store={store}>
                <ArrestAction post={mockPost}/>
            </Provider>
        )
        const textElement = screen.getByText('Arrest This Man/Girl');
        expect(container.firstChild).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });

    test('should add user to arrested users when clicked', () => {
        render(
            <Provider store={store}>
                <ArrestAction post={mockPost}/>
            </Provider>
        )
        const arrestIcon = screen.getByTestId('arrest-icon');
        fireEvent.click(arrestIcon);
        const arrestedUsers = store.getState().arrested.arrestedUsers[0];
        expect(arrestedUsers).toBe('example-user');
    });
});