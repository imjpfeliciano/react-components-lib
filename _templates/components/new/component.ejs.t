---
to: src/components/<%= h.inflection.capitalize(name) %>/<%= h.inflection.capitalize(name) %>.tsx
---
import React from "react";
import { <%= h.inflection.capitalize(name) %>Container } from "./<%= h.inflection.capitalize(name) %>.styled"
import { <%= h.inflection.capitalize(name) %>Props } from "./<%= h.inflection.capitalize(name) %>.types"

const <%= h.inflection.capitalize(name) %>: React.FC<<%= h.inflection.capitalize(name) %>Props> = ({ onClick }) => {
  return (
    <<%= h.inflection.capitalize(name) %>Container onClick={onClick}>
      <%= h.inflection.capitalize(name) %>
    </<%= h.inflection.capitalize(name) %>Container>
  )
};

export default <%= h.inflection.capitalize(name) %>;
