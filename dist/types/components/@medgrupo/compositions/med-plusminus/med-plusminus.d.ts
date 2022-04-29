import { EventEmitter } from '../../../../stencil-public-runtime';
import { PlusMinusStatus } from './med-plusminus.enum';
import { MedColor } from '../../../../interface';
export declare class MedPlusminus {
  /**
  * Define a cor do componente.
  */
  dsColor?: MedColor;
  /**
   * TODO
   */
  dsSize?: 'xl';
  /**
   * TODO
   */
  medChange: EventEmitter<PlusMinusStatus>;
  /**
  * TODO
  */
  disabled?: 'minus' | 'plus' | 'both';
  private onClick;
  render(): any;
}
