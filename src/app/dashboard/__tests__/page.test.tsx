import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import DashboardPage from "../page";

// Mock next/navigation to prevent redirect calls
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

// Mock Supabase server client to return a fake authenticated user
vi.mock("../../../lib/supabase/server", () => ({
  createClient: vi.fn(async () => ({
    auth: {
      getUser: vi.fn(async () => ({
        data: {
          user: {
            email: "test@example.com",
            id: "test-user-id",
          },
        },
      })),
      signOut: vi.fn(),
    },
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

  it("should display the user email", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });

  it("should render the home link", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("link", { name: /Go home/i })).toBeInTheDocument();
  });

  it("should render the logout button", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("button", { name: /Log out/i })).toBeInTheDocument();
  });

  it("should render the tutorial link", async () => {
    const page = await DashboardPage();
    render(page);
    expect(screen.getByRole("link", { name: /Hello World Tutorial/i })).toBeInTheDocument();
  });
});
