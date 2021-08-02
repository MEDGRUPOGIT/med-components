import { Color, Neutral } from '../../../../interface';
import { MedChartRadiaItem } from '../med-chart-radial/med-chart-radial-interface';
export declare class MedChartRadialLabel {
  valores: MedChartRadiaItem[];
  /**
   * Define a cor do componente.
   */
  color?: Color;
  /**
   * Define a cor neutra do componente.
   */
  neutral?: Neutral;
  render(): any;
}
