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
import { selectMenuButtonState } from '../redux/menuButtonSlice';

export default function App() {

  const theme = useSelector(selectTheme);
  const themeColors = useThemeColors();

  // Update the CSS class of the body when the theme changes.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Inline style object.
  const background = useThemeObject("backgroundColor", "background");

  // Set body element to background colour from theme.
  document.body.style.backgroundColor = themeColors.background;

  // Blur the site when the menu is open. 
  const menuButtonState = useSelector(selectMenuButtonState);

  useEffect(() => {
    const pageContainer = document.querySelector('.main-content');

    if (menuButtonState === 'open') {
      pageContainer.classList.add('blur');
    } else {
      pageContainer.classList.remove('blur');
    }
  }, [menuButtonState]);


  return (
    <div className="page-container" style={background}>
      <div className="container-wrap">
        <div className="App">
          <Header />
          <div className='main-content'>
            <Card />
          </div>
          <div className='sidebar desktop'>
            <Sort />
            <SubredditMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
