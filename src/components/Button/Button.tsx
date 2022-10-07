import { StyledButton } from "./Button.styled";
import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

// const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

export default Button;
