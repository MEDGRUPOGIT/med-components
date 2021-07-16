import type { Components, JSX } from "../dist/types/components";

interface IonToast extends Components.IonToast, HTMLElement {}
export const IonToast: {
  prototype: IonToast;
  new (): IonToast;
};
