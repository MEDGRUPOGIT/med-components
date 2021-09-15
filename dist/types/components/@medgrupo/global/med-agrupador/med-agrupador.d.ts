import { MedColor } from '../../../../interface';
export declare class MedAgrupador {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  /**
  * TODO
  */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
