import type { Components, JSX } from "../dist/types/components";

interface IonTabBar extends Components.IonTabBar, HTMLElement {}
export const IonTabBar: {
  prototype: IonTabBar;
  new (): IonTabBar;
};
