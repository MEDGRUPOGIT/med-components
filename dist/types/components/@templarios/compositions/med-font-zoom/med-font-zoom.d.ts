import { MedFontSize } from "../../../../@templarios/templarios";
import { RangeValue } from "../../../range/range-interface";
export declare class MedFontZoom {
  /**
   * todo
   */
  emitter: {
    emit: (value: MedFontSize) => void;
  };
  /**
   * todo
   */
  value: MedFontSize;
  /**
  * todo
   */
  step: boolean;
  readonly min: number;
  readonly max: number;
  fontSizeToValue: (fontSize: MedFontSize) => RangeValue;
  onRangeChange: (rangeValue: RangeValue) => void;
  fixPopover(): void;
  render(): any;
}
