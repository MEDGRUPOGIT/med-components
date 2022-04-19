import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedChip {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação do componente.
    */
  dsName?: 'secondary';
  /**
    * Define a variação de tamanho componente.
    */
  dsSize?: 'md';
  /**
    * Define o texto do componente.
    */
  label: string;
  /**
   * Define o estado disabled do componente.
   */
  disabled: boolean;
  /**
   * Define o estado active do componente.
   */
  active: boolean;
  /**
    * Define o icone left do componente.
    */
  iconLeft: string;
  /**
    * Define o icone right do componente.
    */
  iconRight: string;
  /**
    * Emitido quando o chip tem focus.
    */
  medFocus: EventEmitter<void>;
  /**
    * Emitido quando o chip perde o focus.
    */
  medBlur: EventEmitter<void>;
  /**
    * Emitido quando o chip é clicado.
    */
  medClick: EventEmitter<void>;
  private onFocus;
  private onBlur;
  private onClick;
  render(): any;
}
