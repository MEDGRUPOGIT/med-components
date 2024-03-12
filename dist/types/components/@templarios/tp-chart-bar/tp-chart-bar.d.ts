import { MedColor } from '../../../@templarios/types/color.type';
import { TpChartBarItem } from '../../../@templarios/interfaces/chart-bar.interface';
export declare class TpChartBar {
    host: HTMLElement;
    dsColor?: MedColor;
    dsName?: 'secondary';
    label?: string;
    labelSize: number;
    height: number;
    bar: TpChartBarItem;
    hasMarker: boolean;
    deactivated: boolean;
    marker: TpChartBarItem;
    render(): any;
}
