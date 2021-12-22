export declare class MedCalendar {
  hostElement: any;
  today: Date;
  currentMonth: number;
  currentYear: number;
  selectYear: any;
  selectMonth: any;
  createYear: any;
  monthAndYear: any;
  months: any;
  days: any;
  componentDidLoad(): void;
  private generate_year_range;
  private next;
  private previous;
  private jump;
  private showCalendar;
  private daysInMonth;
  render(): any;
}
