import { ComponentInterface } from '../../../../stencil-public-runtime';
import { MedColor, MedTypeTag, MedTypeToken } from '../../../../interface';
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
  tag?: MedTypeTag;
  render(): any;
}
