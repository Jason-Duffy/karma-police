import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Posts from './Posts';

const mockStore = configureStore([]);

describe('Posts component', () => {
  let store;
  const initialState = {
    subredditData: [], // Add initial state for subredditData
    arrestedUsers: [], // Add initial state for arrestedUsers
    searchResults: [], // Add initial state for searchResults
    noResults: false, // Add initial state for noResults
    sort: 'ascending' // Add initial state for sort
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );
    // Add assertion to check that it renders without errors
  });

  test('renders NoSearchResultsCard when no results', () => {
    const updatedState = {
      ...initialState,
      noResults: true
    };
    store = mockStore(updatedState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

    // Add assertion to check that NoSearchResultsCard is rendered
    expect(getByTestId('no-search-results-card')).toBeInTheDocument();
  });

  // Add more tests for rendering Card components, sorting, and filtering

});
