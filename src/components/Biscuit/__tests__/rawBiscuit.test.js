import { render } from "@testing-library/react";

import Biscuit from "../rawBiscuit.js";

describe("<Biscuit />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Biscuit />);

    expect(container).toMatchSnapshot();
  });
});
