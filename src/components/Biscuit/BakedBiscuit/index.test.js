import { render } from "@testing-library/react";

import BakedBiscuit from "./index.js";

describe("<BakedBiscuit />", () => {
  it("should match snapshot", () => {
    const { container } = render(<BakedBiscuit />);

    expect(container).toMatchSnapshot();
  });
});
