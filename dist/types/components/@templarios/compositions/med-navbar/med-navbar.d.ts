import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedNavbar {
  el: HTMLElement;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsName?: 'secondary' | 'transparent';
  private leftEl;
  private rightEl;
  private centerEl;
  private sidesResizeObserver;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
