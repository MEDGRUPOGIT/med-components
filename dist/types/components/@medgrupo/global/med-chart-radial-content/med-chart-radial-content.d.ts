import { MedColor } from '../../../../interface';
export declare class MedChartRadialContent {
  /**
   * TODO
   */
  total: number;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'lg';
  componentDidRender(): void;
  collapsedChanged(): void;
  private fontResize;
  render(): any;
}
