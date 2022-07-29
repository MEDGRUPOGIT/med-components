import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
import { PlusMinusStatus } from '../../../../@templarios/enums/plusminus.enum';
export declare class MedPlusminus {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsSize?: 'xl';
  /**
   * todo
   */
  medChange: EventEmitter<PlusMinusStatus>;
  /**
   * todo
   */
  disabled?: 'minus' | 'plus' | 'both';
  private onClick;
  render(): any;
}
