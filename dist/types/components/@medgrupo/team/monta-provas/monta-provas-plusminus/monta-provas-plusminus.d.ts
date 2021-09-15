import { EventEmitter } from '../../../../../stencil-public-runtime';
import { PlusMinusStatus } from './monta-provas-plusminus.enum';
import { MedColor } from '../../../../../interface';
export declare class MontaProvasPlusminus {
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
  private onClick;
  render(): any;
}
