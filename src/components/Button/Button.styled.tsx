import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;

  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;
