import { EventEmitter } from '../../../../stencil-public-runtime';
import { headerResizeEventDetail } from '../../../../@templarios/interfaces/header.interface';
export declare class MedHeader {
  el: HTMLElement;
  /**
   * todo
   */
  medResize: EventEmitter<headerResizeEventDetail>;
  private hostHeight;
  private hostResizeObserver;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
