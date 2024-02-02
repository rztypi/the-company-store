import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/shopping cart/i);
  });
});
