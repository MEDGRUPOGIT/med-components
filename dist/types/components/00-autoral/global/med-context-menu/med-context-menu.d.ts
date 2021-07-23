import { Color, Neutral } from '../../../../interface';
export declare class MedContextMenu {
  /**
   * Define a cor neutra do componente.
   */
  neutral?: Neutral;
  /**
   * Define a cor do componente.
   */
  color?: Color;
  collapsed: boolean;
  toggle(event?: Event): Promise<void>;
  render(): any;
}
