import { Animation } from '../../../../utils/animation/animation-interface';
import { ComponentInterface } from '../../../../stencil-public-runtime';
export declare class Accordion implements ComponentInterface {
  hostElement: HTMLElement;
  noBorder: boolean;
  singleOpen: boolean;
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  private blocker;
  private currentlyOpen;
  handleToggle(ev: any): Promise<void>;
  closeOpenItem(): Promise<void>;
  getElementsToShift(target: Element | Node): Element[];
  createOpenAnimation(elements: Element | Node | Element[] | Node[] | NodeList, amountToShift: number, isBlocker: boolean): Animation;
  animateOpen(ev: any): Promise<void>;
  createCloseAnimation(elements: Element | Node | Element[] | Node[] | NodeList, amountToShift: number): Animation;
  animateClose(ev: any): Promise<void>;
  render(): any;
}
