import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home.jsx";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(/the company/i);
  });
});
