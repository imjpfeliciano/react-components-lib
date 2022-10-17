---
to: src/components/<%= h.inflection.capitalize(name) %>/<%= h.inflection.capitalize(name) %>.types.ts
---
export type <%= h.inflection.capitalize(name) %>Props = {
    onClick?: () => void;
};