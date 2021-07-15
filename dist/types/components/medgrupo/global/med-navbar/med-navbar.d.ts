import { EventEmitter } from '../../../../stencil-public-runtime';
import { navbarResizeEventDetail } from './med-navbar-interface';
export declare class MedNavbar {
  el: HTMLElement;
  medResize: EventEmitter<navbarResizeEventDetail>;
  private leftEl;
  private rightEl;
  private centerEl;
  private sidesResizeObserver;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
