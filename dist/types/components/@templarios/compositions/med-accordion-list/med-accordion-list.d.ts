import { ComponentInterface } from '../../../../stencil-public-runtime';
import { Animation } from '../../../../utils/animation/animation-interface';
/**
  * @slot - Slot default destinado ao componente `med-accordion-item`
  */
export declare class Accordion implements ComponentInterface {
  hostElement: HTMLElement;
  /**
   * todo
   */
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * todo
   */
  singleOpen: boolean;
  /**
   * todo
   */
  noBorder: boolean;
  /**
   * todo
   */
  noAnimation: boolean;
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
