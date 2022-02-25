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
    * Define a url da imagem, se existir.
    */
  image?: string;
  /**
    * Define a letra a ser exibida, se existir.
    */
  letter?: string;
  render(): any;
}
