import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
import { Color } from '../../../../interface';
/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  * @slot auxiliar - Define o conteúdo auxiliar do componente.
  * @slot progress - Slot destinado a progress-bar.
  */
export declare class MedAccordionItem implements ComponentInterface {
  hostElement: any;
  /**
    * Define a cor do componente.
    */
  dsColor?: Color;
  /**
    * Define a posição do ícone de abertura do componente.
    */
  icon?: 'left' | 'right';
  /**
    * Define a variação da borda do componente.
    */
  noBorder: boolean;
  /**
    * Define se o componente irá ter background quando aberto.
    */
  background: boolean;
  /**
   * Permite que a abertura do accordion seja bloqueada pelo front.
   */
  canCollapse: boolean;
  /**
   * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
   */
  isOpened: boolean;
  /**
  * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
  */
  slotsToggle: 'start' | 'middle' | 'end'[];
  /**
   * Internal
   */
  toggle: EventEmitter;
  opened: EventEmitter;
  medClick: EventEmitter;
  isOpen: boolean;
  watchPropHandler(newValue: boolean): void;
  componentDidLoad(): void;
  private content;
  private header;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  private onHeaderClick;
  render(): any;
}
