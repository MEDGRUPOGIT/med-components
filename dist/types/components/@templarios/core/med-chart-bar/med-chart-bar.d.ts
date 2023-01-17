import { MedColor } from '../../../../@templarios/types/color.type';
/**
 * @slot  Slot default.
 */
export declare class MedChartBar {
  hostElement: HTMLElement;
  private hostHeight;
  private hostResizeObserver;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  value: number;
  /**
   * todo
   */
  height: number;
  /**
   * todo
   */
  width: number;
  noLabel: boolean;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
