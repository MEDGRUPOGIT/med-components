import type { Components, JSX } from "../dist/types/components";

interface IonToolbar extends Components.IonToolbar, HTMLElement {}
export const IonToolbar: {
  prototype: IonToolbar;
  new (): IonToolbar;
};
