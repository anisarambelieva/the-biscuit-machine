import { render } from "@testing-library/react";

import Machine from "../machine.js";

describe("<Machine />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Machine />);

    expect(container).toMatchSnapshot();
  });
});
