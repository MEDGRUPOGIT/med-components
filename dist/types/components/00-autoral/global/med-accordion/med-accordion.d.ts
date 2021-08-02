/**
 * @slot header - Define o conteudo do header.
 * @slot button - Se houver algum botão deve ser colocado nesse slot.
 * @slot content-fake - Conteúdo que vai aparecer com reticiências.
 * @slot content - Conteúdo do componente.
 */
export declare class MedAccordion {
  el: HTMLElement;
  /**
   * Define a variação de estilo do componente.
   */
  size?: 'full';
  /**
   * Define o posicionamento do icone do componente.
   */
  icon?: 'left' | 'right';
  /**
   * Define o estado do componente.
   */
  collapsed: boolean;
  collapsedState: boolean;
  private contentEl;
  private contentFakeEl;
  private fakeHeight;
  componentDidLoad(): void;
  toggle(): Promise<void>;
  collapsedChanged(): void;
  private onClick;
  private expandContent;
  private sleep;
  render(): any;
}
