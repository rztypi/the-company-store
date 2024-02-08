import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";

describe("App component", () => {
  it("renders navigation", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders rztypi", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/rztypi/i)).toBeInTheDocument();
  });
});
