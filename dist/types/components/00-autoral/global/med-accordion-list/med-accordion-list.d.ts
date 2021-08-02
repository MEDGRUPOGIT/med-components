import { Animation } from '../../../../utils/animation/animation-interface';
import { ComponentInterface } from '../../../../stencil-public-runtime';
export declare class Accordion implements ComponentInterface {
  hostElement: any;
  noBorder: boolean;
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  elementsToShift: Array<any>;
  blocker: HTMLElement;
  currentlyOpen: CustomEvent | any;
  shiftDownAnimation: Animation;
  blockerDownAnimation: Animation;
  teste: Animation;
  handleToggle(ev: any): Promise<void>;
  closeOpenItem(): Promise<true | undefined>;
  animateOpen(ev: any): Promise<[void, void]>;
  animateClose(ev: any): Promise<boolean>;
  render(): any;
}
