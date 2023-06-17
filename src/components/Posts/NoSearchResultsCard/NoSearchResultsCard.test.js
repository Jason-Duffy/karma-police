import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole, getByTestId } from '@testing-library/react';
import NoSearchResultsCard from './NoSearchResultsCard';
import store from '../../../redux/store';

describe('NoSearchResultsCard component', () => {
    test('should render NoSearchResultsCard component', () => {
        const { container } = render(
            <Provider store={store}>
                <NoSearchResultsCard />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('No search results message should render', () => {
        render(
            <Provider store={store}>
                <NoSearchResultsCard />
            </Provider>
        )
        const textElement = screen.getByTestId('no-results-message');
        const textHtml = textElement.innerHTML;
        expect(textHtml).toContain('Sorry! No posts match your search term.');
    });
});