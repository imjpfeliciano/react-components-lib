import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
