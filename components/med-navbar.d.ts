import type { Components, JSX } from "../dist/types/interface";

interface MedNavbar extends Components.MedNavbar, HTMLElement {}
export const MedNavbar: {
  prototype: MedNavbar;
  new (): MedNavbar;
};
