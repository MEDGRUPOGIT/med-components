import { MedColor } from '../../../../interface';
/**
 * @slot start - Conteúdo é posicionado a esquerda do componente.
 * @slot middle - Conteúdo é posicionado ao centro do componente.
 * @slot end - Conteúdo é posicionado a direita do componente.
 */
export declare class MedBase {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação de borde-radius do componente.
    */
  radius?: 's00' | 's02' | 's04' | 's08' | string;
  /**
   * Define a variação de padding vertical do componente.
   */
  spacingV?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;
  /**
    * Define a variação de padding horizontal do componente.
    */
  spacingH?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;
  render(): any;
}
