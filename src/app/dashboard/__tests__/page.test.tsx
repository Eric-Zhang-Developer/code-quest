import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import DashboardPage from "../page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

// Mock next/font/google
vi.mock("next/font/google", () => ({
  Cinzel: () => ({ className: "mocked-cinzel-font" }),
}));

// Mock for .from().select().eq()
const mockFrom = vi.fn();
const mockSelect = vi.fn();
const mockEq = vi.fn();

mockFrom.mockReturnValue({
  select: mockSelect.mockReturnValue({
    eq: mockEq.mockResolvedValue({
      data: [], // Default: No completed quizzes
      error: null,
    }),
  }),
});

vi.mock("../../../lib/supabase/server", () => ({
  createClient: vi.fn(async () => ({
    auth: {
      getUser: vi.fn(async () => ({
        data: {
          user: { email: "test@example.com", id: "test-user-id" },
        },
      })),
      signOut: vi.fn(),
    },
    from: mockFrom,
  })),
}));

describe("Dashboard Page Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the dashboard heading", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should render the home link", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  });

  it("should render the logout button", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("button", { name: /Log out/i })).toBeInTheDocument();
  });

  it("should render the tutorial link", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("link", { name: /Hello World/i })).toBeInTheDocument();
  });

  it("should render the profile button", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("link", { name: /Profile/i })).toBeInTheDocument();
  });

  it("should show Green button for Hello World if completed", async () => {
    // Override the mock for THIS test to simulate completion
    mockEq.mockResolvedValue({
      data: [{ quiz_id: "hello-world" }],
      error: null,
    });

    const page = await DashboardPage();
    render(page);

    const link = screen.getByRole("link", { name: /Hello World/i });
    // Check if link is green
    expect(link.className).toContain("text-emerald-400");
  });
});
