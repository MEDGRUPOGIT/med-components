import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedTooltip {
  enableHover?: boolean;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * todo
   */
  position?: 'start' | 'center' | 'end';
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  content?: string;
  /**
   * todo
   */
  btnLeft?: string;
  /**
   * todo
   */
  btnRight?: string;
  /**
   * todo
   */
  collapsed: boolean;
  /**
   * todo
   */
  btnLeftClick: EventEmitter<void>;
  /**
   * todo
   */
  btnRightClick: EventEmitter<void>;
  /**
   * todo
   */
  toggle(event?: any): Promise<void>;
  toggleOnHover(event?: any): Promise<void>;
  handleClick(event?: any): void;
  private onBtnLeftClick;
  private onBtnRightClick;
  render(): any;
}
