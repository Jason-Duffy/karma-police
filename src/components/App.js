import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/globalStyles.css';
import Header from './Header';
import Card from './Card';
import Sort from './Sort';
import SubredditMenu from './SubredditMenu';

export default function App() {
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
