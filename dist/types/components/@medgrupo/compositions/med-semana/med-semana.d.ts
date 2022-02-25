import { MedColor } from '../../../../interface';
export declare class MedSemana {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação de tamanho do componente.
    */
  dsSize?: 'sm';
  /**
    * Define o estado active do componente.
    */
  active: boolean;
  /**
    * Define a skin do componente.
    */
  skin?: 'lista';
  flipped: boolean;
  private handleFlip;
  render(): any;
}
