import { EventEmitter } from '../../../../stencil-public-runtime';
import { RateStatus } from './med-rate-like.enum';
export declare class MedRateLike {
  /**
   * TODO
   */
  status?: RateStatus;
  /**
   * TODO
   */
  medChange: EventEmitter<RateStatus>;
  private onClick;
  render(): any;
}
