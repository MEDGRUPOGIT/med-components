import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedBanner {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  texto?: string;
  /**
   * todo
   */
  btnLeft: string;
  /**
   * todo
   */
  btnRight: string;
  /**
   * todo
   */
  icon: string;
  /**
   * todo
   */
  image: string;
  /**
   * todo
   */
  btnLeftClick: EventEmitter<void>;
  /**
   * todo
   */
  btnRightClick: EventEmitter<void>;
  private onButtonLeftClick;
  private onButtonRightClick;
  render(): any;
}
