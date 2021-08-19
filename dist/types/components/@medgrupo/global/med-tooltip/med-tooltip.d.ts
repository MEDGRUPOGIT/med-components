export declare class MedTooltip {
  /**
   * Define a variação do componente.
   */
  dsName?: 'definition';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  position?: 'start' | 'center' | 'end';
  titulo?: string;
  content?: string;
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  toggle(event?: Event): Promise<void>;
  handleClick(event?: Event): void;
  render(): any;
}
