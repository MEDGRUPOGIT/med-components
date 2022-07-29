import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedQuestion {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  collapsed: boolean;
  /**
   * todo
   */
  texto?: string;
  /**
   * todo
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
