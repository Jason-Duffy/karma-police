import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/themeSlice';
import '../stylesheets/App.css';
import '../stylesheets/globalStyles.css';
import Header from './Header';
import Card from './Card';
import Sort from './Sort';
import SubredditMenu from './SubredditMenu';

export default function App() {

  const theme = useSelector(selectTheme);

  // Update the CSS class of the body when the theme changes.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <div className="page-container">
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
