import type { Components, JSX } from "../dist/types/components";

interface MedToolbar extends Components.MedToolbar, HTMLElement {}
export const MedToolbar: {
  prototype: MedToolbar;
  new (): MedToolbar;
};
