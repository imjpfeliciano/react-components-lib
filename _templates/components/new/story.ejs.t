---
to: src/components/<%= h.inflection.capitalize(name) %>/<%= h.inflection.capitalize(name) %>.stories.tsx
---
import React from "react";
import { ComponentMeta } from "@storybook/react";
import <%= h.inflection.capitalize(name) %> from "./<%= h.inflection.capitalize(name) %>";
import { <%= h.inflection.capitalize(name) %>Props } from "./<%= h.inflection.capitalize(name) %>.types";

export default {
  title: "Components/<%= h.inflection.capitalize(name) %>",
  component: <%= h.inflection.capitalize(name) %>,
} as ComponentMeta<typeof <%= h.inflection.capitalize(name) %>>;

const Template = (args: <%= h.inflection.capitalize(name) %>Props) => (
  <<%= h.inflection.capitalize(name) %> {...args} />
);

export const Default = Template.bind({});
Default.args = {};