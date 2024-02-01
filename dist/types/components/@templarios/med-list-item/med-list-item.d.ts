import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedListItem {
    dsColor?: MedColor;
    titulo?: string;
    label?: string;
    selected: boolean;
    dsSize?: 'xs' | 'sm' | 'md';
    border: boolean;
    disabled: boolean;
    render(): any;
}
