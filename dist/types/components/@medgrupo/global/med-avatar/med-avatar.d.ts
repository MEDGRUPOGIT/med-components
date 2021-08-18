import { Color, Neutral } from '../../../../interface';
export declare class MedAvatar {
  /**
   * Define a cor neutra do componente.
   */
  color?: Color;
  /**
   * Define a cor neutra do componente.
   */
  neutral?: Neutral;
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
