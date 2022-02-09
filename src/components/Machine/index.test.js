import { render } from "@testing-library/react";

import Machine from "./index.js";

describe("<Machine />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Machine />);

    expect(container).toMatchSnapshot();
  });
});
