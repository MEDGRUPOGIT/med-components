import type { Components, JSX } from "../dist/types/components";

interface IonNavLink extends Components.IonNavLink, HTMLElement {}
export const IonNavLink: {
  prototype: IonNavLink;
  new (): IonNavLink;
};
