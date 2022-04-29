import { ComponentInterface } from '../../../../stencil-public-runtime';
import { Animation } from '../../../../utils/animation/animation-interface';
/**
  * @slot - Slot default destinado ao componente `med-accordion-item`
  */
export declare class Accordion implements ComponentInterface {
  hostElement: HTMLElement;
  /**
    * Define a margin entre os itens do accordion.
    */
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  /**
    * Abre um item de cada vez.
    */
  singleOpen: boolean;
  /**
    * Define a variação da borda do componente.
    */
  noBorder: boolean;
  /**
    * Remove a animação do componente.
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
