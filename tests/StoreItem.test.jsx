import { render, screen } from "@testing-library/react";
import StoreItem from "../src/components/StoreItem.jsx";
import { MemoryRouter, useParams } from "react-router-dom";
import BoomBoxIcon from "../src/assets/BoomboxIcon.webp";

vi.mock("react-router-dom", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useParams: vi.fn(),
    useOutletContext: () => ({}),
  };
});

const mockStoreItem = {
  id: "boombox",
  name: "Boombox",
  src: BoomBoxIcon,
  desc: "These jamming tunes are great for a morale boost on your crew!",
  price: 60,
};

describe("StoreItem component", () => {
  it("renders store item data", () => {
    useParams.mockReturnValueOnce({ id: mockStoreItem.id });
    render(<StoreItem />, { wrapper: MemoryRouter });

    expect(
      screen.queryByRole("heading", { name: mockStoreItem.name }),
    ).toBeInTheDocument();
    expect(screen.getByRole("img").src).toMatch(mockStoreItem.src);
    expect(screen.queryByText(mockStoreItem.desc)).toBeInTheDocument();
    expect(screen.queryByText(`▮${mockStoreItem.price}`)).toBeInTheDocument();
  });

  it("does not render with invalid id", () => {
    useParams.mockReturnValueOnce({ id: "not-valid" });
    render(<StoreItem />, { wrapper: MemoryRouter });

    expect(
      screen.queryByRole("heading", { name: mockStoreItem.name }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(mockStoreItem.desc)).not.toBeInTheDocument();
    expect(
      screen.queryByText(`▮${mockStoreItem.price}`),
    ).not.toBeInTheDocument();
  });
});
