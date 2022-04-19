import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedTooltip {
  /**
    * TODO
    */
  dsColor?: MedColor;
  /**
    * TODO
    */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
    * TODO
    */
  position?: 'start' | 'center' | 'end';
  /**
    * TODO
    */
  titulo?: string;
  /**
    * TODO
    */
  content?: string;
  /**
    * Define o texto do botão esquerdo, se existir.
    */
  btnLeft?: string;
  /**
    * Define o texto do botão direito, se existir.
    */
  btnRight?: string;
  /**
    * TODO
    */
  collapsed: boolean;
  /**
    * TODO
    */
  btnLeftClick: EventEmitter<void>;
  /**
    * TODO
    */
  btnRightClick: EventEmitter<void>;
  /**
    * Define o estado do componente programaticamente.
    */
  toggle(event?: any): Promise<void>;
  handleClick(event?: any): void;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
