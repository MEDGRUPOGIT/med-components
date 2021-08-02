import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class MedAccordionItem implements ComponentInterface {
  hostElement: any;
  noBorder: boolean;
  icon?: 'left' | 'right';
  isOpen: boolean;
  toggle: EventEmitter;
  content: HTMLDivElement;
  header: HTMLDivElement;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
