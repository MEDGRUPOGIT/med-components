import { EventEmitter } from '../../../../stencil-public-runtime';
import { RateStatus } from '../../../../@templarios/enums/rate-like.enum';
export declare class MedRateLike {
  /**
   * todo
   */
  status?: RateStatus;
  /**
   * todo
   */
  medChange: EventEmitter<RateStatus>;
  private onClick;
  render(): any;
}
