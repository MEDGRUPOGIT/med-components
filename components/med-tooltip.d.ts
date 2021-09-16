import type { Components, JSX } from "../dist/types/interface";

interface MedTooltip extends Components.MedTooltip, HTMLElement {}
export const MedTooltip: {
  prototype: MedTooltip;
  new (): MedTooltip;
};
