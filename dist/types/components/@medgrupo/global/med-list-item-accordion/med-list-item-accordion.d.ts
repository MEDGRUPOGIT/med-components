import { MedColor } from '../../../../interface';
export declare class MedListItemAccordion {
  /**
   * TODO
   */
  titulo?: string;
  /**
   * TODO
   */
  label?: string;
  /**
   * TODO
   */
  dsColor?: MedColor;
  /**
   * TODO
   */
  selected: boolean;
  /**
   * TODO
   */
  dsSize?: 'xs' | 'sm' | 'md';
  /**
   * TODO
   */
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * TODO
   */
  border: boolean;
  /**
   * TODO
   */
  collapsed: boolean;
  /**
   * If `true`, the user cannot interact with the button.
   */
  disabled: boolean;
  /**
   * TODO
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
