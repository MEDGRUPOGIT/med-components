import { MedColor } from '../../../../@templarios/types/color.type';
import { MedChartRadiaItem } from '../../../../@templarios/interfaces/chart-radial.interface';
export declare class MedChartRadial {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsName?: 'secondary';
  /**
   * todo
   */
  dsSize?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * todo
   */
  valores: MedChartRadiaItem[];
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  subtitulo?: string;
  render(): any;
}
