import type { Components, JSX } from "../dist/types/interface";

interface MedOffline extends Components.MedOffline, HTMLElement {}
export const MedOffline: {
  prototype: MedOffline;
  new (): MedOffline;
};
