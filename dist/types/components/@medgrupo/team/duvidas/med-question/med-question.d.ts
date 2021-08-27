import { Color, Neutral } from '../../../../../interface';
export declare class MedQuestion {
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
  /**
    * Define o conteúdo de texto do componente.
    */
  texto?: string;
  toggle(event?: Event): Promise<void>;
  render(): any;
}
