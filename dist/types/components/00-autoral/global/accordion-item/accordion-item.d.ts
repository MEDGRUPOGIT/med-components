import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class AccordionItem implements ComponentInterface {
  hostElement: any;
  toggle: EventEmitter;
  content: HTMLDivElement;
  isOpen: boolean;
  private isTransitioning;
  componentDidLoad(): void;
  toggleOpen(): void;
  render(): any;
}
