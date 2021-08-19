import { MedChartRadiaItem } from './med-chart-radial-interface';
import { Color } from '../../../../interface';
export declare class MedChartRadial {
  /**

   */
  color?: Color;
  /**
   * Define a variação do componente.
   */
  dsName?: string;
  valores: MedChartRadiaItem[];
  private getTotal;
  render(): any;
}
