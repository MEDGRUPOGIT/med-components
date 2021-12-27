import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedCalendarDay {
  medDayClick: EventEmitter;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  active: boolean;
  private onDayClick;
  render(): any;
}
