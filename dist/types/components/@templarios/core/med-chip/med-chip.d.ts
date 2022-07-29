import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedChip {
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
  dsSize?: 'md';
  /**
   * todo
   */
  label: string;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  active: boolean;
  /**
   * todo
   */
  iconLeft: string;
  /**
   * todo
   */
  iconRight: string;
  /**
   * todo
   */
  medFocus: EventEmitter<void>;
  /**
   * todo
   */
  medBlur: EventEmitter<void>;
  /**
   * todo
   */
  medClick: EventEmitter<void>;
  private onFocus;
  private onBlur;
  private onClick;
  render(): any;
}
