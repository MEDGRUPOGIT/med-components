import type { Components, JSX } from "../dist/types/interface";

interface MedContextMenu extends Components.MedContextMenu, HTMLElement {}
export const MedContextMenu: {
  prototype: MedContextMenu;
  new (): MedContextMenu;
};
