import { Color, Neutral } from '../../../../interface';
export declare class MedListItem {
  titulo?: string;
  label?: string;
  neutral?: Neutral;
  color?: Color;
  selected: boolean;
  dsSize?: 'xs' | 'sm' | 'md';
  border: boolean;
  render(): any;
}
