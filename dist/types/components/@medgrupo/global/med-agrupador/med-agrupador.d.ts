import { MedColor } from '../../../../interface';
export declare class MedAgrupador {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * TODO.
    */
  texto1: string;
  /**
    * TODO.
    */
  texto2: string;
  /**
    * Define o estado do componente.
    */
  collapsed: boolean;
  /**
    * Define o estado do componente programaticamente.
    */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
