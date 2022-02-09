import { render } from "@testing-library/react";

import BiscuitLifecycle from "../biscuitLifecycle.js";

describe("<BiscuitLifecycle />", () => {
  it("should match snapshot", () => {
    const { container } = render(<BiscuitLifecycle />);

    expect(container).toMatchSnapshot();
  });
});
