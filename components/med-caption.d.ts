import type { Components, JSX } from "../dist/types/interface";

interface MedCaption extends Components.MedCaption, HTMLElement {}
export const MedCaption: {
  prototype: MedCaption;
  new (): MedCaption;
};
