import { EventEmitter } from '../../../../stencil-public-runtime';
import { headerResizeEventDetail } from './med-header-interface';
export declare class MedHeader {
  el: HTMLElement;
  medResize: EventEmitter<headerResizeEventDetail>;
  private hostHeight;
  private hostResizeObserver;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
