import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedAgrupador {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  labelDefault: string;
  /**
   * todo
   */
  labelAlternativo: string;
  /**
   * todo
   */
  collapsed: boolean;
  /**
   * todo
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
