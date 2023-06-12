// React moduke imports.
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
// Local imports.
import SubredditList from './SubredditList';
import store from '../../redux/store';

/*
test('renders subreddit list correctly', () => {
    const subredditList = ['reactjs', 'javascript', 'webdev'];
  
    render(
      <Provider store={store}>
        <Router>
          <SubredditList />
        </Router>
      </Provider>
    );
    
    const listItems = document.querySelectorAll('#sr-list > li');
  
    expect(listItems.length).toBe(subredditList.length);
    
    listItems.forEach((listItem, index) => {
      expect(listItem.textContent).toBe(subredditList[index]);
    });
  });
*/

test('should render subredditList component', () => {
    render(
        <Provider store={store}>
            <Router>
                <SubredditList />
            </Router>
        </Provider>
    );
    const subredditListElement = screen.getByTestId('subredditList-1');
    expect(subredditListElement).toBeInTheDocument();
})