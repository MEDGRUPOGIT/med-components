import type { Components, JSX } from "../dist/types/interface";

interface HvAccordionItem extends Components.HvAccordionItem, HTMLElement {}
export const HvAccordionItem: {
  prototype: HvAccordionItem;
  new (): HvAccordionItem;
};
