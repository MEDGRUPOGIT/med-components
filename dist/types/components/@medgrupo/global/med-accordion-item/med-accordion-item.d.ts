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
   * TODO
   */
  toggle: EventEmitter;
  isOpen: boolean;
  private content;
  private header;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
