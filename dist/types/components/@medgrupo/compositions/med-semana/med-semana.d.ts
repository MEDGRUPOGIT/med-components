import { MedColor } from '../../../../interface';
export declare class MedSemana {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o estado do componente.
    */
  active: boolean;
  /**
    * Define a skin do componente.
    */
  skin?: 'lista';
  render(): any;
}
