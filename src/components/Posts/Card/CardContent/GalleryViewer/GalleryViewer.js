// React module imports.
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// Local imports.
import { useThemeColors } from "../../../../../hooks/themeHooks";
// Style imports. 
import './GalleryViewer.css';

const GalleryViewer = ({ images }) => {

    const iconSize = "60";

    // Get theme variables.
    const themeColors = useThemeColors();
    const buttonColor = themeColors.accent;

    // Create and manage gallery index state.
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const currentImage = images[currentIndex];

    return (
        <div className="gallery-viewer">
            {currentIndex > 0 ? (
                <FaArrowAltCircleLeft
                    className="gallery-viewer-button"
                    size={iconSize}
                    color={buttonColor}
                    onClick={handlePrevious} />
            ) : <></>}

            <img src={currentImage} alt="Gallery Image" />

            {currentIndex < images.length - 1 ? (
                <FaArrowAltCircleRight
                    className="gallery-viewer-button"
                    size={iconSize}
                    color={buttonColor}
                    onClick={handleNext} />
            ) : <></>}
        </div>
    );
};

export default GalleryViewer;
