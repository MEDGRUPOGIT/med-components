import type { Components, JSX } from "../dist/types/components";

interface IonNote extends Components.IonNote, HTMLElement {}
export const IonNote: {
  prototype: IonNote;
  new (): IonNote;
};
