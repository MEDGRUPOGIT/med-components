import { MedColor } from "../../../../@templarios/types/color.type";
import { TpChartBarItem } from "../../../../@templarios/interfaces/chart-bar.interface";
export declare class TpChartBar {
  host: HTMLElement;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsName?: "secondary";
  /**
   * todo
   */
  label?: string;
  /**
   * todo
   */
  labelSize: number;
  /**
   * todo
   */
  height: number;
  /**
   * todo
   */
  bar: TpChartBarItem;
  /**
   * todo
   */
  hasMarker: boolean;
  /**
   * todo
   */
  deactivated: boolean;
  /**
   * todo
   */
  marker: TpChartBarItem;
  render(): any;
}
