import { MedFontSize } from "../../../../global/templarios/font-size.enum";
import { RangeValue } from "../../../range/range-interface";
export declare class MedFontZoom {
  /**
   * TODO
   */
  emitter: {
    emit: (value: MedFontSize) => void;
  };
  /**
   * Define o tamnho da fonte
   */
  value: MedFontSize;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  fontSizeToValue: (fontSize: MedFontSize) => RangeValue;
  onRangeChange: (rangeValue: RangeValue) => void;
  render(): any;
}
