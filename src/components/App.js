import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/themeSlice';
import { useThemeColors, useThemeObject } from '../hooks/themeHooks';
import '../stylesheets/App.css';
import '../stylesheets/globalStyles.css';
import Header from './Header';
import Card from './Card';
import Sort from './Sort';
import SubredditMenu from './SubredditMenu';

export default function App() {

  const theme = useSelector(selectTheme);
  const themeColors = useThemeColors();

  // Update the CSS class of the body when the theme changes.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Inline style object.
  const background = useThemeObject("background", themeColors.background);

  // Set body element to background colour from theme.
  document.body.style.backgroundColor = themeColors.background;


  return (
    <div className="page-container" style={background}>
      <div className="container-wrap">
        <div className="App">
          <Header />
          <div className='main-content'>
            <Card />
          </div>
          <div className='sidebar'>
            <Sort />
            <SubredditMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
