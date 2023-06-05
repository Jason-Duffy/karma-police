import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './containers/App/App';

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/KARMA POLICE/i);
  expect(headerText).toBeInTheDocument();
});
