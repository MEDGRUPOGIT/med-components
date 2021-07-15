import type { Components, JSX } from "../dist/types/components";

interface IonGrid extends Components.IonGrid, HTMLElement {}
export const IonGrid: {
  prototype: IonGrid;
  new (): IonGrid;
};
