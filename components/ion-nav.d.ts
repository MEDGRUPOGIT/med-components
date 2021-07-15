import type { Components, JSX } from "../dist/types/components";

interface IonNav extends Components.IonNav, HTMLElement {}
export const IonNav: {
  prototype: IonNav;
  new (): IonNav;
};
