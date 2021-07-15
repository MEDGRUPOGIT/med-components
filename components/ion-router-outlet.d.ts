import type { Components, JSX } from "../dist/types/components";

interface IonRouterOutlet extends Components.IonRouterOutlet, HTMLElement {}
export const IonRouterOutlet: {
  prototype: IonRouterOutlet;
  new (): IonRouterOutlet;
};
