import type { Components, JSX } from "../dist/types/interface";

interface MedHeader extends Components.MedHeader, HTMLElement {}
export const MedHeader: {
  prototype: MedHeader;
  new (): MedHeader;
};
