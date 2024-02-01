import { MedColor } from '../../../@templarios/types/color.type';
import { MedChartRadiaItem } from '../../../@templarios/interfaces/chart-radial.interface';
export declare class MedChartRadial {
    dsColor?: MedColor;
    dsName?: 'secondary';
    dsSize?: 'xs' | 'sm' | 'md' | 'lg';
    valores: MedChartRadiaItem[];
    titulo?: string;
    subtitulo?: string;
    render(): any;
}
