import type { Components, JSX } from "../dist/types/interface";

interface MedTiles extends Components.MedTiles, HTMLElement {}
export const MedTiles: {
  prototype: MedTiles;
  new (): MedTiles;
};
