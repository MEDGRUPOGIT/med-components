import { MedColor } from '../../../../interface';
/**
 * @slot  Slot default.
 */
export declare class MedChartBar {
  hostElement: HTMLElement;
  private hostHeight;
  private hostResizeObserver;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a valor do componente.
    */
  value: number;
  /**
    * Define o height em px do componente.
    */
  height: number;
  /**
    * Define o width em px do componente.
    */
  width: number;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
