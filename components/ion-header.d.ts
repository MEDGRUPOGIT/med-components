import type { Components, JSX } from "../dist/types/components";

interface IonHeader extends Components.IonHeader, HTMLElement {}
export const IonHeader: {
  prototype: IonHeader;
  new (): IonHeader;
};
