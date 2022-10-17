---
inject: true
to: src/components/index.ts
append: true
---
export { default as <%= h.inflection.capitalize(name) %> } from "./<%= h.inflection.capitalize(name) %>";