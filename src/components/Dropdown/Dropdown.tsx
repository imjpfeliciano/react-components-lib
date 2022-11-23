import React from "react";
import { DropdownContainer } from "./Dropdown.styled"
import { DropdownProps } from "./Dropdown.types"

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
  return (
    <DropdownContainer>
      {label} test
    </DropdownContainer>
  )
};

export default Dropdown;
