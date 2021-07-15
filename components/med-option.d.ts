import type { Components, JSX } from "../dist/types/components";

interface MedOption extends Components.MedOption, HTMLElement {}
export const MedOption: {
  prototype: MedOption;
  new (): MedOption;
};
