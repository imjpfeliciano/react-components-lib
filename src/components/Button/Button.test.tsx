import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button", () => {
  render(<Button text="Button" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with correct text", () => {
  render(<Button text="Hello" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Hello/i);
  expect(buttonElement).toHaveTextContent("Hello");
});

test("executes onClick function when clicked", () => {
  const onClick = jest.fn();
  render(<Button text="Button" onClick={onClick} />);

  const buttonElement = screen.getByText(/Button/i);
  buttonElement.click();
  expect(onClick).toHaveBeenCalledTimes(1);
});
