---
to: src/components/<%= h.inflection.capitalize(name) %>/<%= h.inflection.capitalize(name) %>.test.tsx
---
import React from "react";
import { render } from "@testing-library/react";
import <%= h.inflection.capitalize(name) %> from "./<%= h.inflection.capitalize(name) %>";

describe("<%= h.inflection.capitalize(name) %>", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<<%= h.inflection.capitalize(name) %> />);
    expect(baseElement).toBeTruthy();
  });
});


