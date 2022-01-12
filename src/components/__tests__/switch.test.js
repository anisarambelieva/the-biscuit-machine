import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Machine from "../machine.js";

describe("<Switch />", () => {
  it("should start heating oven", async () => {
    render(<Machine />);
    const button = screen.getByRole("button", {
      name: /On/i,
    });

    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText(/1/i)).toBeInTheDocument(), {
      timeout: 1000,
    });
  });
});
