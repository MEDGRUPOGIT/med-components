export declare class MedContextMenu {
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  /**
   * Define o estado do componente programaticamente.
   */
  toggle(event?: Event): Promise<void>;
  handleClick(event?: Event): void;
  render(): any;
}
