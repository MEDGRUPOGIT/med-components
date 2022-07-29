import { BreakPointNameEnum, BreakPointPixelEnum } from '../enums/breakpoint.enum';
export declare class BreakpointUtils {
  private static getWidth;
  static mediaQueryUp(breakpoint: BreakPointPixelEnum): boolean;
  static mediaQueryDown(breakpoint: BreakPointPixelEnum): boolean;
  static mediaQueryBetween(breakpointLeft: BreakPointPixelEnum, brekpointRight: BreakPointPixelEnum): boolean;
  static mediaQueryOnly(breakpoint: BreakPointPixelEnum): boolean;
  static sizeButtonMEDSmart(): BreakPointNameEnum;
}
