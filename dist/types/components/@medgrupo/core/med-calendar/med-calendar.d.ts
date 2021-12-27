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
  calendario?: string;
  choice: string;
  medClick: EventEmitter;
  medChoiceClick: EventEmitter;
  medMonthClick: EventEmitter;
  medSwipe: EventEmitter;
  private container;
  componentDidLoad(): void;
  private onChoiceClick;
  private onMonthClick;
  render(): any;
}
