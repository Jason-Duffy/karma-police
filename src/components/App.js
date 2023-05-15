import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';

export default function App() {
  return (
    <div className="page-container">
      <div className="container-wrap">
        <div className="App">
          <Header />
        </div>
      </div>
    </div>
  );
}
