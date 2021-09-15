import { MedColor } from '../../../../interface';
export declare class MedParagraph {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
  * Define a variação do componente.
  */
  dsName?: 'double';
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  render(): any;
}
