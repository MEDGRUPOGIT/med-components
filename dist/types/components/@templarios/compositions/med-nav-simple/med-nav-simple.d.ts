import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedNavSimple {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  close: EventEmitter;
  private clickHandle;
  render(): any;
}
