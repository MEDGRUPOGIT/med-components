import type { Components, JSX } from "../dist/types/interface";

interface MedMessageList extends Components.MedMessageList, HTMLElement {}
export const MedMessageList: {
  prototype: MedMessageList;
  new (): MedMessageList;
};
