import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedCalendar {
  hostElement: any;
  dsColor?: MedColor;
  mes?: string;
  ano?: string;
  choice: string;
  width: number;
  medClick: EventEmitter;
  medSwipe: EventEmitter;
  private gesture;
  private container;
  connectedCallback(): void;
  init(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private onChoiceClick;
  private onMonthClick;
  private onGraficoClick;
  render(): any;
}
