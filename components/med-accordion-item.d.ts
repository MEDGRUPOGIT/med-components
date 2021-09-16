import type { Components, JSX } from "../dist/types/interface";

interface MedAccordionItem extends Components.MedAccordionItem, HTMLElement {}
export const MedAccordionItem: {
  prototype: MedAccordionItem;
  new (): MedAccordionItem;
};
