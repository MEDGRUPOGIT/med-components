import type { Components, JSX } from "../dist/types/components";

interface MedImageZoom extends Components.MedImageZoom, HTMLElement {}
export const MedImageZoom: {
  prototype: MedImageZoom;
  new (): MedImageZoom;
};
