import React from "react";
import { ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template = (args: DropdownProps) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Dropdown",
};