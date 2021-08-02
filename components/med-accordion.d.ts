import type { Components, JSX } from "../dist/types/interface";

interface MedAccordion extends Components.MedAccordion, HTMLElement {}
export const MedAccordion: {
  prototype: MedAccordion;
  new (): MedAccordion;
};
