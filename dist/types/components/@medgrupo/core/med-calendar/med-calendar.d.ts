import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export interface MedCalendar {
  date: number;
  month: number;
  year: number;
  monthName: string;
}
export declare class MedCalendar {
  hostElement: any;
  dsColor?: MedColor;
  mes?: string;
  ano?: string;
  choice: string;
  medClick: EventEmitter;
  medSwipe: EventEmitter;
  private gesture;
  private container;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private onChoiceClick;
  private onMonthClick;
  private onGraficoClick;
  render(): any;
}
