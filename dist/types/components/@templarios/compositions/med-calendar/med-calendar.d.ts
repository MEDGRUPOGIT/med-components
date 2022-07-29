import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedCalendar {
  hostElement: any;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  mes?: string;
  /**
   * todo
   */
  ano?: string;
  /**
   * todo
   */
  container?: string;
  /**
   * todo
   */
  disable: boolean;
  /**
   * todo
   */
  choice: string;
  /**
   * todo
   */
  width: number;
  /**
   * todo
   */
  medClick: EventEmitter;
  /**
   * todo
   */
  medSwipe: EventEmitter;
  private gesture;
  private containerEl;
  connectedCallback(): void;
  init(): void;
  watchPropHandler(newValue: any): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private onChoiceClick;
  private onMonthClick;
  render(): any;
}
