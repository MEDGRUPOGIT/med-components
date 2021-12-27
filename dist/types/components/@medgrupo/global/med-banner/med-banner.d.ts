import { EventEmitter } from '../../../../stencil-public-runtime';
/**
  * @slot imagem - Posiciona um elemento imagem ou icone a esquerda do banner.
  * @slot content - Define o conetudo de texto do banner.
  */
export declare class MedBanner {
  /**
   * Define o título do banner.
   */
  header: string;
  /**
   * Define o texto do botão esquerdo, se existir.
   */
  btnLeft: string;
  /**
   * Define o texto do botão direito.
   */
  btnRight: string;
  /**
   * Define o texto texto do botão direito, se existir.
   */
  btnLeftClick: EventEmitter<void>;
  /**
   * Emitido quando é feito um click no botão direito.
   */
  btnRightClick: EventEmitter<void>;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
