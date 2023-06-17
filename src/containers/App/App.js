// React module imports.
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// Local imports.
import { useThemeColors, useThemeObject } from '../../hooks/themeHooks';
import { selectTheme } from '../../redux/themeSlice';
import { selectMenuButtonState, closeMenu } from '../../redux/menuButtonSlice';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';
import RedirectToDefaultSubreddit from '../../elements/RedirectToDefaultSubreddit/RedirectToDefaultSubreddit';
// Style imports
import './App.css';
import '../../stylesheets/globalStyles.css';


export default function App() {

  // Get & manage theme state and theme variables.
  const theme = useSelector(selectTheme);
  const themeColors = useThemeColors();
  // Blur the site when the menu is open. 
  const menuButtonState = useSelector(selectMenuButtonState);

  const dispatch = useDispatch();

  // Inline style object.
  const background = useThemeObject("backgroundColor", "background");

  // Update the CSS class of the body when the theme changes.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Set body element to background colour from theme.
  document.body.style.backgroundColor = themeColors.background;

  // Blur background when mobile menu is open. 
  useEffect(() => {
    const pageContainer = document.querySelector('.main-content');

    if (menuButtonState === 'open') {
      pageContainer.classList.add('blur');
    } else {
      pageContainer.classList.remove('blur');
    }
  }, [menuButtonState]);

  // Dispatch the close menu action when blurred background is tapped.
  const handleCloseMenu = () => {
    if (menuButtonState === 'open') {
      dispatch(closeMenu());
    }
  };

  return (
    <Router>
      <div className="page-container" style={background}>
        <div className="container-wrap">
          <div className="App">
            <Header />
            <div
              data-testid="menu-overlay"
              className={`menu-overlay ${menuButtonState === 'open' ? 'visible' : ''}`}
              onClick={handleCloseMenu}
            />
            <div className='main-content' data-testid="main-content">
              <Routes>
                <Route path="/r/:subreddit" element={<Posts />} />
                <Route path="/" element={<RedirectToDefaultSubreddit />} />
              </Routes>
            </div>
            <div className='sidebar-container desktop'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};