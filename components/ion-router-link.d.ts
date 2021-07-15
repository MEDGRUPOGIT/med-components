import type { Components, JSX } from "../dist/types/components";

interface IonRouterLink extends Components.IonRouterLink, HTMLElement {}
export const IonRouterLink: {
  prototype: IonRouterLink;
  new (): IonRouterLink;
};
