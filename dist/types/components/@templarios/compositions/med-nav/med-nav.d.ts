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
  watchClick(): Promise<void>;
  private clickHandle;
  render(): any;
}
