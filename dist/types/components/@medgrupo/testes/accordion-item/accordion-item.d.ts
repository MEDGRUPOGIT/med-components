import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class AccordionItem implements ComponentInterface {
  hostElement: HTMLElement;
  isOpen: boolean;
  /**
   * Internal
   */
  toggle: EventEmitter;
  contentElement: HTMLDivElement;
  private itemId;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
