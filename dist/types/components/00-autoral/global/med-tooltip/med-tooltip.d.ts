export declare class MedTooltip {
  /**
   * Define a variação do componente.
   */
  dsName?: 'definition';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  position?: 'start' | 'center' | 'end';
  header: string;
  content: string;
  buttonLeft: {
    label: string;
    icon: string;
  };
  buttonRight: {
    label: string;
    icon: string;
  };
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  toggle(event?: Event): Promise<void>;
  handleClick(event?: Event): void;
  render(): any;
}
