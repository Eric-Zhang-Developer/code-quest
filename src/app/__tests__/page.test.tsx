import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LandingPage from "../page";

//mock next/font/google to fix "SyntaxError: [vite] The requested module '/node_modules/next/font/google/index.js' does not provide an export named 'Cinzel'"
vi.mock("next/font/google", () => ({
  Cinzel: () => ({
    className: "mock-cinzel-font",
    style: {},
  }),
}));

describe("Landing Page Tests", () => {
  it("should render the welcome heading on load", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
  });

  it("should render the Code Quest logo on load", () => {
    render(<LandingPage />);
    expect(screen.getByAltText("CodeQuest Logo")).toBeInTheDocument();
  });

  it("should render the start journey button on load", () => {
    render(<LandingPage />);
    expect(screen.getByRole("link", { name: /Start Your Journey/i })).toBeInTheDocument();
  });
});
