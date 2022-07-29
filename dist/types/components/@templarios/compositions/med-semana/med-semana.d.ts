import { MedSemanaInterface } from '../../../../@templarios/interfaces/semana.interface';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedSemana {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsSize?: 'sm';
  /**
   * todo
   */
  active: boolean;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  skin?: 'lista';
  /**
   * todo
   */
  content: MedSemanaInterface;
  /**
   * todo
   */
  hideDownload: boolean;
  /**
   * todo
   */
  flipped: boolean;
  private handleFlip;
  private createTextContainerEl;
  private createPieChartEl;
  render(): any;
}
