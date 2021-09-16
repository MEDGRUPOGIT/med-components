import type { Components, JSX } from "../dist/types/interface";

interface MedQuestion extends Components.MedQuestion, HTMLElement {}
export const MedQuestion: {
  prototype: MedQuestion;
  new (): MedQuestion;
};
