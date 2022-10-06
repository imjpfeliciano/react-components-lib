import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./";

export default {
  title: "Components",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = (args: ButtonProps) => <Button {...args} />;
Primary.storyName = "Button";
Primary.args = {
  text: "Button",
  onClick: () => {},
};
