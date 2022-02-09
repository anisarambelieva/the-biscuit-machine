import { render, screen } from "@testing-library/react";

import App from "./index.js";

test("renders The Biscuit Machine heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/The Biscuit Machine/i);
  expect(headingElement).toBeInTheDocument();
});
