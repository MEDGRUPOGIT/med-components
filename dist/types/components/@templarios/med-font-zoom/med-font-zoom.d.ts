import { MedFontSize } from "../../../@templarios/templarios";
import { RangeValue } from "../../range/range-interface";
export declare class MedFontZoom {
    emitter: {
        emit: (value: MedFontSize) => void;
    };
    value: MedFontSize;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    fontSizeToValue: (fontSize: MedFontSize) => RangeValue;
    onRangeChange: (rangeValue: RangeValue) => void;
    fixPopover(): void;
    render(): any;
}
