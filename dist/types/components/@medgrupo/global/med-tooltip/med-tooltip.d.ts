import { MedColor } from '../../../../interface';
export declare class MedTooltip {
  /**
   * TODO
   */
  dsName?: 'definition';
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
   * TODO
   */
  collapsed: boolean;
  /**
   * TODO
   */
  toggle(event?: Event): Promise<void>;
  handleClick(event?: Event): void;
  render(): any;
}
