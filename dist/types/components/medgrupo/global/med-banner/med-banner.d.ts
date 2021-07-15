import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class MedBanner {
  header: string;
  btnLeft: string;
  btnRight: string;
  btnLeftClick: EventEmitter<void>;
  btnRightClick: EventEmitter<void>;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
