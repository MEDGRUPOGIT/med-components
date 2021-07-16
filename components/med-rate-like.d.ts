import type { Components, JSX } from "../dist/types/components";

interface MedRateLike extends Components.MedRateLike, HTMLElement {}
export const MedRateLike: {
  prototype: MedRateLike;
  new (): MedRateLike;
};
