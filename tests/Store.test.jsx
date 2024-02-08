import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Store from "../src/components/Store.jsx";
import { getStoreData } from "../src/storeData.js";

vi.mock("react-router-dom", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useOutletContext: () => ({}),
  };
});

describe("Store component", () => {
  it("renders correct heading", () => {
    render(<Store />, { wrapper: MemoryRouter });

    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /store/i,
    );
  });

  it("renders store data", () => {
    render(<Store />, { wrapper: MemoryRouter });

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(
      getStoreData().length,
    );
  });

  describe("search filter", () => {
    it("is rendered", () => {
      render(<Store />, { wrapper: MemoryRouter });

      expect(
        screen.queryByRole("textbox", { name: /search/i }),
      ).toBeInTheDocument();
    });

    it("does not render clear button when input is empty", () => {
      render(<Store />, { wrapper: MemoryRouter });

      expect(
        screen.queryByRole("button", { name: /clear/i }),
      ).not.toBeInTheDocument();
    });

    it("renders clear button when input is not empty", async () => {
      const user = userEvent.setup();
      render(<Store />, { wrapper: MemoryRouter });

      const search = screen.getByRole("textbox");

      await user.click(search);
      await user.keyboard("not empty");

      expect(
        screen.queryByRole("button", { name: /clear/i }),
      ).toBeInTheDocument();
    });

    it("filters store data properly", async () => {
      const user = userEvent.setup();
      render(<Store />, { wrapper: MemoryRouter });

      const search = screen.getByRole("textbox", { name: /search/i });

      await user.click(search);
      await user.keyboard("flashlight");

      expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(2);
    });
  });
});
