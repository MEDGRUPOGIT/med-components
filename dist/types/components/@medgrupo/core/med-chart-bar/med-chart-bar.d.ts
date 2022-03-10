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
    * Define a valor da %(porcentagem) do componente.
    */
  value: number;
  /**
    * Define a valor da altura do componente.
    */
  height: number;
  /**
    * Define a valor da largura do componente.
    */
  width: number;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
