import type { Components, JSX } from "../dist/types/components";

interface IonItemOptions extends Components.IonItemOptions, HTMLElement {}
export const IonItemOptions: {
  prototype: IonItemOptions;
  new (): IonItemOptions;
};
