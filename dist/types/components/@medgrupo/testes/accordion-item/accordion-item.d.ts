import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class AccordionItem implements ComponentInterface {
  hostElement: HTMLElement;
  /**
    * Define se o componente irá ter background quando aberto.
    */
  background: boolean;
  /**
    * Desabilita o componente.
    */
  disable: boolean;
  /**
    * Abre programaticamente o componente.
    */
  open: boolean;
  /**
    * Desabilita o componente.
    */
  headerToggle: boolean;
  isOpen: boolean;
  /**
   * Internal
   */
  toggle: EventEmitter;
  watchPropHandler(newValue: boolean): void;
  componentDidLoad(): void;
  contentElement: HTMLDivElement;
  private itemId;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
