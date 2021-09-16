import type { Components, JSX } from "../dist/types/interface";

interface MedList extends Components.MedList, HTMLElement {}
export const MedList: {
  prototype: MedList;
  new (): MedList;
};
