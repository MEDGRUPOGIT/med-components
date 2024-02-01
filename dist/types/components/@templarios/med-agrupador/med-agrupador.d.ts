import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedAgrupador {
    dsColor?: MedColor;
    labelDefault: string;
    labelAlternativo: string;
    collapsed: boolean;
    toggle(event?: Event): Promise<void>;
    render(): any;
}
