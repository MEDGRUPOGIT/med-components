import type { Components, JSX } from "../dist/types/components";

interface MedTooltip extends Components.MedTooltip, HTMLElement {}
export const MedTooltip: {
  prototype: MedTooltip;
  new (): MedTooltip;
};
