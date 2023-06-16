import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import PostMedia from './PostMedia';
import store from '../../../../../redux/store';

const mockPost = {
    galleryData: {
        "items": [
            {
                "media_id": "algalu0hva6b1",
                "id": 288462897
            },
            {
                "media_id": "91qzdt0hva6b1",
                "id": 288462898
            }
        ]
    },
    mediaMetaData: {
        "91qzdt0hva6b1": {
            "status": "valid",
            "e": "Image",
            "m": "image/jpg",
            "p": [
                {
                    "y": 60,
                    "x": 108,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=aa1a5ebf6205dcde9c9ddcea25600e0a74f12a97"
                },
                {
                    "y": 121,
                    "x": 216,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=d3bada4b55b877032e642de17927dffbd57d4bf8"
                },
                {
                    "y": 180,
                    "x": 320,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=01a3cca20de86064ce7ae8523c5e145fde15c089"
                },
                {
                    "y": 360,
                    "x": 640,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=3e4c0907e3f9b7db01e59ec2d7ddc21e73a23174"
                },
                {
                    "y": 540,
                    "x": 960,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=d592be9796ccd92d03f001884f5f8659313e2d2d"
                },
                {
                    "y": 607,
                    "x": 1080,
                    "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=f5cb146ccee559962ad4ec1eae59949b9130f696"
                }
            ],
            "s": {
                "y": 1080,
                "x": 1920,
                "u": "https://preview.redd.it/91qzdt0hva6b1.jpg?width=1920&amp;format=pjpg&amp;auto=webp&amp;v=enabled&amp;s=c67e9ec10b575a6991f39b5fcaeb2a7e3d7f576b"
            },
            "id": "91qzdt0hva6b1"
        },
        "algalu0hva6b1": {
            "status": "valid",
            "e": "Image",
            "m": "image/jpg",
            "p": [
                {
                    "y": 60,
                    "x": 108,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=ebdb8837e8c8e4b20e2a8d1657a29167ec7d5a0a"
                },
                {
                    "y": 121,
                    "x": 216,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=fa294f92cd7aa44ca3c1f6afbb3cecd8adcc8423"
                },
                {
                    "y": 180,
                    "x": 320,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=50a2ae2a9194b7b075d2c85c28449b8c63947113"
                },
                {
                    "y": 360,
                    "x": 640,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=0bd707d459a835ae326ae4b058d200ed3359d183"
                },
                {
                    "y": 540,
                    "x": 960,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=e4aa95208bac1f56f0874e68fc33200b71341589"
                },
                {
                    "y": 607,
                    "x": 1080,
                    "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;v=enabled&amp;s=1f3123f99ec04f42f5d1497641124bc6d18fbe1b"
                }
            ],
            "s": {
                "y": 1080,
                "x": 1920,
                "u": "https://preview.redd.it/algalu0hva6b1.jpg?width=1920&amp;format=pjpg&amp;auto=webp&amp;v=enabled&amp;s=6f2951b3aeb5804040eddcb41046ce335aa1dacc"
            },
            "id": "algalu0hva6b1"
        },
        "urlOverridden": "https://www.reddit.com/gallery/14aly23",
    },
    media: null,
    postHint: 'image',
    isVideo: false,
    urlOverridden: 'https://www.example-url.com/asset-1.jpg',
    url: 'https://www.example-url.com/asset-1.jpg',
    postTitle: 'Example Post Title-1'
}

describe('PostMedia component', () => {
    test('should render PostMedia component', () => {
        const { container } = render(
            <Provider store={store}>
                <PostMedia post={mockPost} />
            </Provider>
        )
        expect(container.firstChild).toBeInTheDocument();
    });
});
