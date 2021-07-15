import type { Components, JSX } from "../dist/types/components";

interface MedBanner extends Components.MedBanner, HTMLElement {}
export const MedBanner: {
  prototype: MedBanner;
  new (): MedBanner;
};
