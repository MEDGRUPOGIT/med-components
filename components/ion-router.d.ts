import type { Components, JSX } from "../dist/types/components";

interface IonRouter extends Components.IonRouter, HTMLElement {}
export const IonRouter: {
  prototype: IonRouter;
  new (): IonRouter;
};
