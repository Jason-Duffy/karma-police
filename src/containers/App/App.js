// React module imports.
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// Local imports.
import { useThemeColors, useThemeObject } from '../../hooks/themeHooks';
import { selectTheme } from '../../redux/themeSlice';
import { selectMenuButtonState } from '../../redux/menuButtonSlice';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Sort from '../../components/Header/Sort/Sort';
import SubredditMenu from '../../components/Sidebar/SubredditMenu/SubredditMenu';
// Style imports
import './App.css';
import '../../stylesheets/globalStyles.css';


export default function App() {

  // Get & manage theme state and theme variables.
  const theme = useSelector(selectTheme);
  const themeColors = useThemeColors();

  // Inline style object.
  const background = useThemeObject("backgroundColor", "background");

  // Update the CSS class of the body when the theme changes.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
          <div className='main-content inline-flex'>
            <Card />
          </div>
          <div className='sidebar inline-flex desktop'>
            <Sort />
            <SubredditMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
