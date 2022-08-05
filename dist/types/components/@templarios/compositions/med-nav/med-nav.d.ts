import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedNav {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  active: boolean;
  /**
   * todo
   */
  clicked: EventEmitter;
  watchClick(): Promise<void>;
  private clickHandle;
  render(): any;
}
