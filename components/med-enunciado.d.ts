import type { Components, JSX } from "../dist/types/components";

interface MedEnunciado extends Components.MedEnunciado, HTMLElement {}
export const MedEnunciado: {
  prototype: MedEnunciado;
  new (): MedEnunciado;
};
