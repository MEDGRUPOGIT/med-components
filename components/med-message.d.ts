import type { Components, JSX } from "../dist/types/interface";

interface MedMessage extends Components.MedMessage, HTMLElement {}
export const MedMessage: {
  prototype: MedMessage;
  new (): MedMessage;
};
