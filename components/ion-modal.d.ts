import type { Components, JSX } from "../dist/types/components";

interface IonModal extends Components.IonModal, HTMLElement {}
export const IonModal: {
  prototype: IonModal;
  new (): IonModal;
};
