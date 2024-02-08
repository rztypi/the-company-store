import { render, screen } from "@testing-library/react";
import { MemoryRouter, useOutletContext } from "react-router-dom";
import Cart from "../src/components/Cart.jsx";

vi.mock("react-router-dom", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useOutletContext: vi.fn(),
  };
});

const mockCartItem = {
  item: {
    id: "pizza",
    name: "Pizza",
    price: 1000,
  },
  qty: 69,
};

describe("Cart component", () => {
  it("renders correct heading", () => {
    useOutletContext.mockReturnValue({ cartData: [] });
    render(<Cart />, { wrapper: MemoryRouter });

    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /cart/i,
    );
  });

  it("properly renders with empty cart", () => {
    useOutletContext.mockReturnValue({ cartData: [] });
    render(<Cart />, { wrapper: MemoryRouter });

    expect(screen.queryByText(/no items in cart/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /checkout/i }),
    ).not.toBeInTheDocument();
  });

  it("properly renders with items in cart", () => {
    useOutletContext.mockReturnValue({
      cartData: [mockCartItem],
    });
    render(<Cart />, { wrapper: MemoryRouter });

    expect(screen.queryByText(/no items in cart/i)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /checkout/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/total:/i)).toBeInTheDocument();
  });
});

describe("CartItem component", () => {
  useOutletContext.mockReturnValue({ cartData: [mockCartItem] });

  it("renders cart item data", () => {
    render(<Cart />, { wrapper: MemoryRouter });

    expect(screen.queryByText(mockCartItem.item.name)).toBeInTheDocument();
    expect(
      screen.queryByText(`▮${mockCartItem.item.price}`),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(`▮${mockCartItem.item.price * mockCartItem.qty}`),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /delete/i }),
    ).toBeInTheDocument();
  });
});
