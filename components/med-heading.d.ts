import type { Components, JSX } from "../dist/types/interface";

interface MedHeading extends Components.MedHeading, HTMLElement {}
export const MedHeading: {
  prototype: MedHeading;
  new (): MedHeading;
};
