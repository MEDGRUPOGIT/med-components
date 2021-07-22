import { Color, Neutral } from '../../../../interface';
export interface MedRadialItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
}
export declare class MedChartLabel {
  valores: MedRadialItem[];
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
