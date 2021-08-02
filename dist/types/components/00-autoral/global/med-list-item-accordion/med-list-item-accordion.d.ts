import { Color, Neutral } from '../../../../interface';
export declare class MedListItemAccordion {
  titulo?: string;
  label?: string;
  neutral?: Neutral;
  color?: Color;
  selected: boolean;
  dsSize?: 'xs' | 'sm' | 'md';
  margin?: 'xs' | 'sm' | 'md' | 'lg';
  border: boolean;
  collapsed: boolean;
  toggle(event?: Event): Promise<void>;
  render(): any;
}
