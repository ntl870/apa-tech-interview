import { render, screen } from "@testing-library/react";
import Sidebar from "..";
import { LobbyItem } from "../../../api/games/types";
import React from "react";

const mockData: LobbyItem[] = [
  {
    id: "1",
    name: "Category 1",
    path: "/path1",
    isLiveCasino: false,
  },
  {
    id: "2",
    name: "Category 2",
    path: "/path2",
    isLiveCasino: false,
  },
];

describe("Sidebar", () => {
  test("renders without crashing", () => {
    render(<Sidebar data={mockData} />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeDefined();
  });

  test("renders the correct number of links", () => {
    render(<Sidebar data={mockData} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(mockData.length);
  });

  test("renders the correct link text", () => {
    render(<Sidebar data={mockData} />);
    const firstLinkElement = screen.getByRole("link", { name: /Category 1/i });
    expect(firstLinkElement).toBeDefined();
  });
});
