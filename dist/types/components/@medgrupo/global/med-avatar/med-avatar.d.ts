import { MedColor } from '../../../../interface';
export declare class MedAvatar {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Define a imagem do componente.
   */
  image?: string;
  /**
   * Define a imagem do componente.
   */
  letter?: string;
  render(): any;
}
