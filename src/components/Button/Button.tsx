import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

// const Button = ({ text, onButtonClick }: any) => {
//   return <button onClick={onButtonClick}>{text}</button>;
// };

export default Button;
