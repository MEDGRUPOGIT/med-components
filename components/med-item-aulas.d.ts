import type { Components, JSX } from "../dist/types/interface";

interface MedItemAulas extends Components.MedItemAulas, HTMLElement {}
export const MedItemAulas: {
  prototype: MedItemAulas;
  new (): MedItemAulas;
};
