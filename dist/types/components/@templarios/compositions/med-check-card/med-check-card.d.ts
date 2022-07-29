import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedCheckCard {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  alert: boolean;
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  categoria?: string;
  /**
   * todo
   */
  horaInicial?: string;
  /**
   * todo
   */
  horaFinal?: string;
  /**
   * todo
   */
  dataInicial?: string;
  /**
   * todo
   */
  dataFinal?: string;
  /**
   * todo
   */
  finalizada?: string;
  /**
   * todo
   */
  iconName?: string;
  /**
   * todo
   */
  medClick: EventEmitter;
  /**
   * todo
   */
  medTooltipClose: EventEmitter;
  onClick(): void;
  onTooltipCloseClick(): void;
  render(): any;
}
