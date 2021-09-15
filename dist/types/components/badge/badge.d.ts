import { ComponentInterface } from '../../stencil-public-runtime';
import { Color, MedColor } from '../../interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export declare class Badge implements ComponentInterface {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação do componente.
   */
  dsName?: 'secondary';
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  render(): any;
}
