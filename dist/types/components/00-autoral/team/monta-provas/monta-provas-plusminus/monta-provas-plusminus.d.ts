import { EventEmitter } from '../../../../../stencil-public-runtime';
import { PlusMinusStatus } from './monta-provas-plusminus.enum';
export declare class MontaProvasPlusminus {
  dsSize?: 'xl';
  medChange: EventEmitter<PlusMinusStatus>;
  private onClick;
  render(): any;
}
