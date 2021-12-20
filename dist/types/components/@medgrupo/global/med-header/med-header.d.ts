import { EventEmitter } from '../../../../stencil-public-runtime';
import { headerResizeEventDetail } from './med-header-interface';
export declare class MedHeader {
  el: HTMLElement;
  /**
   * TODO
   */
  medResize: EventEmitter<headerResizeEventDetail>;
  private hostHeight;
  private hostResizeObserver;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
