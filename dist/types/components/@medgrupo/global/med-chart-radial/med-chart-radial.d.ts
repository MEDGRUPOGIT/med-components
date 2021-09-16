import { MedChartRadiaItem } from './med-chart-radial-interface';
import { MedColor } from '../../../../interface';
export declare class MedChartRadial {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação do componente.
   */
  dsName?: string;
  /**
   * Define os valores do gráfico
   */
  valores: MedChartRadiaItem[];
  render(): any;
}
