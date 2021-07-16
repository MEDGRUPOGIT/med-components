import type { Components, JSX } from "../dist/types/components";

interface IonRefresher extends Components.IonRefresher, HTMLElement {}
export const IonRefresher: {
  prototype: IonRefresher;
  new (): IonRefresher;
};
