import type { Components, JSX } from "../dist/types/components";

interface IonApp extends Components.IonApp, HTMLElement {}
export const IonApp: {
  prototype: IonApp;
  new (): IonApp;
};
