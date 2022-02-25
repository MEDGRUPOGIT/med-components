import { MedColor } from '../../../../interface';
export declare class MedPiechart {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação de tamanho do componente.
    */
  dsSize?: 'sm';
  /**
    * Define o estado de download do componente.
    */
  download: boolean;
  /**
    * Define o estado de downloaded do componente.
    */
  downloaded: boolean;
  /**
    * Define o valor do progresso do componente.
    */
  value: number;
  /**
    * Define a porcentagem a ser mostrada.
    */
  label?: string;
  /**
   * Define o estado do componente programaticamente.
   */
  toggle(event?: Event): Promise<void>;
  render(): any;
}
