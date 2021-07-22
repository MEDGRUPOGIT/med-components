import type { Components, JSX } from "../dist/types/interface";

interface MedRateLike extends Components.MedRateLike, HTMLElement {}
export const MedRateLike: {
  prototype: MedRateLike;
  new (): MedRateLike;
};
