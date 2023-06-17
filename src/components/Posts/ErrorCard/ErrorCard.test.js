import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import ErrorCard from './ErrorCard';
import store from '../../../redux/store';

const mockErrorCode = 403;

describe('ErrorCard component', () => {
    test('should render ErrorCard component', () => {
        const { container } = render(
            <Provider store={store}>
                <ErrorCard  errorCode={mockErrorCode} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });

    test('error message should contain error code and description', () => {
        render(
            <Provider store={store}>
                <ErrorCard  errorCode={mockErrorCode} />
            </Provider>
        )
        const textElement = screen.getByTestId('error-message');
        const textHtml = textElement.innerHTML;
        expect(textHtml).toContain('403');
        expect(textHtml).toContain('Forbidden');
    });
});