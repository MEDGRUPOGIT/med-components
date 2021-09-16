import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class MedBanner {
  /**
   * TODO
   */
  header: string;
  /**
   * TODO
   */
  btnLeft: string;
  /**
   * TODO
   */
  btnRight: string;
  /**
   * TODO
   */
  btnLeftClick: EventEmitter<void>;
  /**
   * TODO
   */
  btnRightClick: EventEmitter<void>;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
