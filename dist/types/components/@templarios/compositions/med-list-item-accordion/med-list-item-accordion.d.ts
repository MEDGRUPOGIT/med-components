import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedListItemAccordion {
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  label?: string;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  selected: boolean;
  /**
   * todo
   */
  dsSize?: 'xs' | 'sm' | 'md';
  /**
   * todo
   */
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * todo
   */
  border: boolean;
  /**
   * todo
   */
  collapsed: boolean;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
