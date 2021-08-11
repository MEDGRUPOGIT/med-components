import type { Components, JSX } from "../dist/types/interface";

interface MedRating extends Components.MedRating, HTMLElement {}
export const MedRating: {
  prototype: MedRating;
  new (): MedRating;
};
