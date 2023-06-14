import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Changed if not clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);

    //Assert
    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    const outputElement = screen.queryByText("Changed", { exact: false });

    //Assert
    expect(outputElement).not.toBeInTheDocument();
  });
});
