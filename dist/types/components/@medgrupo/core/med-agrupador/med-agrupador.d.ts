import { MedColor } from '../../../../interface';
export declare class MedAgrupador {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o texto no estado default.
    */
  labelDefault: string;
  /**
    * Define o texto no estado active.
    */
  labelAlternativo: string;
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
