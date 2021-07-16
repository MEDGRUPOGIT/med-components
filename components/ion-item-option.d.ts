import type { Components, JSX } from "../dist/types/components";

interface IonItemOption extends Components.IonItemOption, HTMLElement {}
export const IonItemOption: {
  prototype: IonItemOption;
  new (): IonItemOption;
};
