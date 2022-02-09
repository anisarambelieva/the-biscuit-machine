import { render } from "@testing-library/react";

import BakedBiscuit from "../bakedBiscuit.js";

describe("<BakedBiscuit />", () => {
  it("should match snapshot", () => {
    const { container } = render(<BakedBiscuit />);

    expect(container).toMatchSnapshot();
  });
});
