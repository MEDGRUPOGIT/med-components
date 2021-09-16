import type { Components, JSX } from "../dist/types/interface";

interface MedConfig extends Components.MedConfig, HTMLElement {}
export const MedConfig: {
  prototype: MedConfig;
  new (): MedConfig;
};
