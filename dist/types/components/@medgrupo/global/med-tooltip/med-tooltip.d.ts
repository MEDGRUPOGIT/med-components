import { MedColor } from '../../../../interface';
export declare class MedTooltip {
  /**
   * Define a variação do componente.
   */
  dsName?: 'definition';
  /**
    * Define a cor do componente.
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
   * Define o estado do componente.
   */
  collapsed: boolean;
  /**
   * TODO
   */
  toggle(event?: Event): Promise<void>;
  handleClick(event?: Event): void;
  render(): any;
}
