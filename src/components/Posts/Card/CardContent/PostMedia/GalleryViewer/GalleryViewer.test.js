import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import GalleryViewer from './GalleryViewer';
import store from '../../../../../../redux/store';

const mockImages = [
    'www.example-url.com/example-image-1.jpg',
    'www.example-url.com/example-image-2.png',
    'www.example-url.com/example-image-3.png'  
];

describe('GalleryViewer component', () => {
    test('should render GalleryViewer component', () => {
        const { container } = render(
            <Provider store={store}>
                <GalleryViewer images={mockImages}/>
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    test('should render next image button when > 1 images in gallery', () => {
        render(
            <Provider store={store}>
                <GalleryViewer images={mockImages}/>
            </Provider>
        )
        const nextButton = screen.getByTestId('next-button');
        expect(nextButton).toBeInTheDocument();
    })

    test('should not render previous image button when on first image', () => {
        render(
            <Provider store={store}>
                <GalleryViewer images={mockImages}/>
            </Provider>
        )
        const prevButton = screen.queryByTestId('previous-button');
        expect(prevButton).toBeNull();
    })

    test('should render both previous and next buttons when in middle of image array', () => {
        render(
            <Provider store={store}>
                <GalleryViewer images={mockImages}/>
            </Provider>
        )
        let nextButton = screen.getByTestId('next-button');
        fireEvent.click(nextButton);
        const prevButton = screen.getByTestId('previous-button');
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    })

    test('should not render next image button when on last image', () => {
        render(
            <Provider store={store}>
                <GalleryViewer images={mockImages}/>
            </Provider>
        )
        let nextButton = screen.queryByTestId('next-button');
        fireEvent.click(nextButton);
        fireEvent.click(nextButton);

        nextButton = screen.queryByTestId('next-button');
        expect(nextButton).toBeNull();
    })
});