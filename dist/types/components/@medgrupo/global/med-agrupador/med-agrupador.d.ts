import { Color, Neutral } from '../../../../interface';
export declare class MedAgrupador {
  /**
   * Define a cor do componente.
   */
  color?: Color;
  /**
   * Define a cor neutra do componente.
   */
  neutral?: Neutral;
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  toggle(event?: Event): Promise<void>;
  render(): any;
}
