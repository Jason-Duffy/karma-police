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
  const karmaText = screen.getByRole('heading', { name: /KARMA/i });
  expect(karmaText).toBeInTheDocument();
  const policeText = screen.getByRole('heading', { name: /POLICE/i });
  expect(policeText).toBeInTheDocument();
});
