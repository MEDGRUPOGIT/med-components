import { MedColor } from '../../../../interface';
import { MedChartRadiaItem } from '../../core/med-chart-radial/med-chart-radial-interface';
export declare class MedChartRadialLabel {
  /**
   * TODO
   */
  valores: MedChartRadiaItem[];
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'lg';
  render(): any;
}
