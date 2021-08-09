import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  */
export declare class MedAccordionItem implements ComponentInterface {
  hostElement: any;
  /**
    * Define a posição do ícone de abertura do componente.
    */
  icon?: 'left' | 'right';
  /**
    * Define a variação da borda do componente.
    */
  noBorder: boolean;
  isOpen: boolean;
  toggle: EventEmitter;
  private content;
  private header;
  private isTransitioning;
  private onClick;
  private toggleOpen;
  render(): any;
}
