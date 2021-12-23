import { MedColor } from '../../../../interface';
export declare class MedCalendar {
  hostElement: any;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  today: Date;
  currentMonth: number;
  currentYear: number;
  createYear: any;
  months: any;
  days: any;
  private monthAndYear;
  private selectYear;
  private selectMonth;
  private calendarHead;
  private calendarBody;
  componentDidLoad(): void;
  private generate_year_range;
  private next;
  private previous;
  private jump;
  private showCalendar;
  private daysInMonth;
  render(): any;
}
