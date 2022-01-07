import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedBanner {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'sm' | 'md';
  /**
    * Define o título do componente.
    */
  titulo?: string;
  /**
    * Define o texto do componente.
    */
  texto?: string;
  /**
   * Define o texto do botão esquerdo, se existir.
   */
  btnLeft: string;
  /**
    * Define o texto do botão direito, se existir.
    */
  btnRight: string;
  /**
    * Emitido quando há um click no botão esquerdo.
    */
  btnLeftClick: EventEmitter<void>;
  /**
    * Emitido quando há um click no botão direito.
    */
  btnRightClick: EventEmitter<void>;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
