import type { Components, JSX } from "../dist/types/interface";

interface MedParent extends Components.MedParent, HTMLElement {}
export const MedParent: {
  prototype: MedParent;
  new (): MedParent;
};
