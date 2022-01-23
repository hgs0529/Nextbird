import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import "../matchMedia";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다", () => {
    const { getByRole } = render(<Index />);

    const menu = getByRole("navigation", {
      name: "",
    });

    expect(menu).toBeInTheDocument();
  });
});
