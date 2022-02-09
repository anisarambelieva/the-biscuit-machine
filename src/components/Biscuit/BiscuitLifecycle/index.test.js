import { render } from "@testing-library/react";

import BiscuitLifecycle from "./index.js";

describe("<BiscuitLifecycle />", () => {
  it("should match snapshot", () => {
    const { container } = render(<BiscuitLifecycle />);

    expect(container).toMatchSnapshot();
  });
});
