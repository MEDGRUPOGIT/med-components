import { ComponentInterface } from '../../../../stencil-public-runtime';
import { Animation } from '../../../../utils/animation/animation-interface';
export declare class AccordionGroup implements ComponentInterface {
  hostElement: HTMLElement;
  /**
    * TODO.
    */
  singleOpen: boolean;
  /**
    * TODO.
    */
  noAnimation: boolean;
  itemsToShift: Array<any>;
  currentlyOpen: CustomEvent | null;
  shiftDownAnimation: Animation;
  contentDownAnimation: Animation;
  private openAnimationTime;
  private closeAnimationTime;
  handleToggle(event: any): Promise<void>;
  closeOpenItem(): Promise<true | undefined>;
  animateOpen(event: any): Promise<[void, void]>;
  animateClose(event: any): Promise<boolean>;
  render(): any;
}
