import { MedColor } from '../../../../interface';
/**
 * @slot left - Posiciona um elemento ao lado esquerdo ao navbar
 * @slot title - Titulo da navbar.
 * @slot subtitle - Subtitulo da navbar.
 * @slot right - Posiciona um elemento ao lado direito da navbar.
 */
export declare class MedNavbar {
  el: HTMLElement;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação do componente.
   */
  dsName?: 'secondary' | 'transparent';
  private leftEl;
  private rightEl;
  private centerEl;
  private sidesResizeObserver;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setSize;
  render(): any;
}
