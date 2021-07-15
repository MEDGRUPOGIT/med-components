import type { Components, JSX } from "../dist/types/components";

interface IonList extends Components.IonList, HTMLElement {}
export const IonList: {
  prototype: IonList;
  new (): IonList;
};
