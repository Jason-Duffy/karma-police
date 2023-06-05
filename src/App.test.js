import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders header text', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerText = screen.getByText(/KARMA POLICE/i);
  expect(headerText).toBeInTheDocument();
});