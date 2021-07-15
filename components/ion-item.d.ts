import type { Components, JSX } from "../dist/types/components";

interface IonItem extends Components.IonItem, HTMLElement {}
export const IonItem: {
  prototype: IonItem;
  new (): IonItem;
};
