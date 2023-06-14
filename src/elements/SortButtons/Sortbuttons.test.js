import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Sortbuttons from './SortButtons';
import store from '../../redux/store';

describe('Sortbuttons component', () => {
    test('should render Sortbuttons component', () => {
        render(
            <Provider store={store}>
                <Sortbuttons />
            </Provider>
        );
        const sortbuttonsElement = screen.getByTestId('sortbuttons-1');
        expect(sortbuttonsElement).toBeInTheDocument();
    })

    test('should change sort method to ascending when clicked', async () => {
        render(
            <Provider store={store}>
                <Sortbuttons />
            </Provider>
        );

        const upArrow = screen.getByTestId('up-arrow');
        fireEvent.click(upArrow);
        const sortMethodAsc = store.getState().sort;
        expect(sortMethodAsc).toEqual('ascending');
    });

    test('should change sort method to descending when clicked', async () => {
        render(
            <Provider store={store}>
                <Sortbuttons />
            </Provider>
        );

        const downArrow = screen.getByTestId('down-arrow');
        fireEvent.click(downArrow);
        const sortMethodDesc = store.getState().sort;
        expect(sortMethodDesc).toEqual('descending');
    });
});