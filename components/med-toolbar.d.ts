import type { Components, JSX } from "../dist/types/interface";

interface MedToolbar extends Components.MedToolbar, HTMLElement {}
export const MedToolbar: {
  prototype: MedToolbar;
  new (): MedToolbar;
};
