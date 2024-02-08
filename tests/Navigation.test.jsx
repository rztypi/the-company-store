import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "../src/components/Navigation.jsx";

const mockCartData = [1, 2, 3, 4, 5];

describe("Navigation component", () => {
  it("renders the links", () => {
    render(<Navigation cartData={mockCartData} />, { wrapper: MemoryRouter });

    expect(screen.queryByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /store/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("renders the number of items in the cart", () => {
    render(<Navigation cartData={mockCartData} />, { wrapper: MemoryRouter });

    expect(
      screen.queryByText(`(${mockCartData.length})`, { exact: false }),
    ).toBeInTheDocument();
  });
});
