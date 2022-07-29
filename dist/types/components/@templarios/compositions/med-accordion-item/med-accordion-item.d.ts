import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
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
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  noBorder: boolean;
  /**
   * todo
   */
  background: boolean;
  /**
   * todo
   */
  canCollapse: boolean;
  /**
   * todo
   */
  isOpened: boolean;
  /**
   * todo
   */
  slotsToggle: 'start' | 'middle' | 'end'[];
  /**
   * todo
   */
  toggle: EventEmitter;
  /**
   * todo
   */
  opened: EventEmitter;
  /**
   * todo
   */
  medClick: EventEmitter;
  /**
   * todo
   */
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
