import { MedColor } from '../../../../interface';
export declare class MedQuestion {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o estado do componente.
    */
  collapsed: boolean;
  /**
    * Define o conteúdo de texto do componente.
    */
  texto?: string;
  /**
   * Muda o estado do componente programaticamente.
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
