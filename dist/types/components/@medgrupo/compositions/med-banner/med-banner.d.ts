import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedBanner {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
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
    * Define o icone, se existir.
    */
  icon: string;
  /**
    * Define a url da imagem, se existir.
    */
  image: string;
  /**
    * Emitido quando há um click no botão esquerdo.
    */
  btnLeftClick: EventEmitter<void>;
  /**
    * Emitido quando há um click no botão direito.
    */
  btnRightClick: EventEmitter<void>;
  private onButtonLeftClick;
  private onButtonRightClick;
  render(): any;
}
