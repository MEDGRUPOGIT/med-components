import { ComponentInterface } from '../../../../stencil-public-runtime';
import { MedColor, MedTypeToken } from '../../../../interface';
export declare class MedType implements ComponentInterface {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o token do componente.
    */
  token?: MedTypeToken;
  /**
    * Define a tag HTML do componente.
    */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  render(): any;
}
