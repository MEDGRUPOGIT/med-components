import type { Components, JSX } from "../dist/types/interface";

interface MedListItem extends Components.MedListItem, HTMLElement {}
export const MedListItem: {
  prototype: MedListItem;
  new (): MedListItem;
};
