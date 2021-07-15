import type { Components, JSX } from "../dist/types/components";

interface MedAutocomplete extends Components.MedAutocomplete, HTMLElement {}
export const MedAutocomplete: {
  prototype: MedAutocomplete;
  new (): MedAutocomplete;
};
