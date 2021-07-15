import type { Components, JSX } from "../dist/types/components";

interface MedOffline extends Components.MedOffline, HTMLElement {}
export const MedOffline: {
  prototype: MedOffline;
  new (): MedOffline;
};
