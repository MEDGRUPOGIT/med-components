import type { Components, JSX } from "../dist/types/interface";

interface MedVote extends Components.MedVote, HTMLElement {}
export const MedVote: {
  prototype: MedVote;
  new (): MedVote;
};
