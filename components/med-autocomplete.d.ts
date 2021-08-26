import type { Components, JSX } from "../dist/types/interface";

interface MedAutocomplete extends Components.MedAutocomplete, HTMLElement {}
export const MedAutocomplete: {
  prototype: MedAutocomplete;
  new (): MedAutocomplete;
};
