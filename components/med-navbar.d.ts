import type { Components, JSX } from "../dist/types/components";

interface MedNavbar extends Components.MedNavbar, HTMLElement {}
export const MedNavbar: {
  prototype: MedNavbar;
  new (): MedNavbar;
};
