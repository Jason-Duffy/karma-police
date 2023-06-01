// React module imports.
import React, { useState } from "react";
// Local imports.
import { useThemeColors } from "../../../../../hooks/themeHooks";
// Style imports. 
import './GalleryViewer.css';

const GalleryViewer = ({ images }) => {

    // Get theme variables.
    const themeColors = useThemeColors();

    const styleObject = {
        backgroundColor: themeColors.accent,
        color: themeColors.primaryText
    }

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
      <button onClick={handlePrevious} disabled={currentIndex === 0} style={styleObject}>
        Previous
      </button>
      <img src={currentImage} alt="Gallery Image" />
      <button onClick={handleNext} disabled={currentIndex === images.length - 1} style={styleObject}>
        Next
      </button>
    </div>
  );
};

export default GalleryViewer;
