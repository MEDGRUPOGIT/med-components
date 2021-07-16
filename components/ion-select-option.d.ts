import type { Components, JSX } from "../dist/types/components";

interface IonSelectOption extends Components.IonSelectOption, HTMLElement {}
export const IonSelectOption: {
  prototype: IonSelectOption;
  new (): IonSelectOption;
};
