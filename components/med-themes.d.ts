import type { Components, JSX } from "../dist/types/interface";

interface MedThemes extends Components.MedThemes, HTMLElement {}
export const MedThemes: {
  prototype: MedThemes;
  new (): MedThemes;
};
