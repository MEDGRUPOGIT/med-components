import type { Components, JSX } from "../dist/types/interface";

interface MedChild extends Components.MedChild, HTMLElement {}
export const MedChild: {
  prototype: MedChild;
  new (): MedChild;
};
