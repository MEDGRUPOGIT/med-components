import type { Components, JSX } from "../dist/types/components";

interface IonAlert extends Components.IonAlert, HTMLElement {}
export const IonAlert: {
  prototype: IonAlert;
  new (): IonAlert;
};
