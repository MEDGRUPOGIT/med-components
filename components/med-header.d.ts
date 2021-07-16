import type { Components, JSX } from "../dist/types/components";

interface MedHeader extends Components.MedHeader, HTMLElement {}
export const MedHeader: {
  prototype: MedHeader;
  new (): MedHeader;
};
