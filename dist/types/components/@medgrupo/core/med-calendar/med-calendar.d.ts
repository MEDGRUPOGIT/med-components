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
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  calendario?: string;
  choice: string;
  medChoiceClick: EventEmitter;
  medMonthClick: EventEmitter;
  private onChoiceClick;
  private onMonthClick;
  render(): any;
}
