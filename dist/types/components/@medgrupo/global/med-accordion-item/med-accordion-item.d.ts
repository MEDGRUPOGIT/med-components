import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
import { Color } from '../../../../interface';
/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  * @slot auxiliar - Define o conteúdo auxiliar do componente.
  */
export declare class MedAccordionItem implements ComponentInterface {
  hostElement: any;
  /**
   * Define a cor do componente.
   */
  color?: Color;
  /**
   * Define a variação do componente.
   */
  dsName?: 'secondary';
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
  isOpen: boolean;
  toggle: EventEmitter;
  private content;
  private header;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
