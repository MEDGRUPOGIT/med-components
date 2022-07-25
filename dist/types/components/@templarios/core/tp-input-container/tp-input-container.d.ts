import { MedColor } from '../../../../interface';
export declare class TpInputContainer {
  dsColor?: MedColor;
  dsName?: 'secondary';
  disabled: boolean;
  feedback: boolean;
  hasButton?: 'start' | 'end' | 'both';
  hasIcon?: 'start' | 'end' | 'both';
  render(): any;
}
