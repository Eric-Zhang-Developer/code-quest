import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TutorialHelloWorld from "../page";

// Mock the BackToDashBoardLink component
vi.mock("@/components/back-to-dashboard-link", () => ({
  default: () => <div data-testid="back-to-dashboard-link">Back to Dashboard</div>,
}));

// Mock next/font/google
vi.mock("next/font/google", () => ({
  Cinzel: () => ({
    className: "mocked-cinzel-font",
  }),
}));

// Mock react-youtube
vi.mock("react-youtube", () => ({
  default: ({ videoId }: { videoId: string }) => (
    <div data-testid="youtube-player" data-videoid={videoId}>
      YouTube Player
    </div>
  ),
}));

describe("Tutorial Hello World Page Tests", () => {
  it("should render the main quest heading", () => {
    render(<TutorialHelloWorld />);
    expect(
      screen.getByRole("heading", { name: /Quest: The Oracle's First Greeting/i })
    ).toBeInTheDocument();
  });

  it("should render the back to dashboard link", () => {
    render(<TutorialHelloWorld />);
    expect(screen.getByTestId("back-to-dashboard-link")).toBeInTheDocument();
  });

  it("should render the YouTube video component", () => {
    render(<TutorialHelloWorld />);
    const youtubePlayer = screen.getByTestId("youtube-player");
    expect(youtubePlayer).toBeInTheDocument();
    expect(youtubePlayer).toHaveAttribute("data-videoid", "hp4pYFASTrc");
  });
});
