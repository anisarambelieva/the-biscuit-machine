import { render, screen } from '@testing-library/react';

test('renders The Biscuit Machine heading', () => {
import App from "./App.js";
  render(<App />);
  const headingElement = screen.getByText(/The Biscuit Machine/i);
  expect(headingElement).toBeInTheDocument();
});
