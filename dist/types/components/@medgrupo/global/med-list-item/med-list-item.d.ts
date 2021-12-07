import { MedColor } from '../../../../interface';
export declare class MedListItem {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
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
  selected: boolean;
  /**
   * TODO
   */
  dsSize?: 'xs' | 'sm' | 'md';
  /**
   * TODO
   */
  border: boolean;
  /**
   * If `true`, the user cannot interact with the button.
   */
  disabled: boolean;
  render(): any;
}
