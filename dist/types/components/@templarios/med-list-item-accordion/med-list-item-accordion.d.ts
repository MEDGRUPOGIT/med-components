import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedListItemAccordion {
    titulo?: string;
    label?: string;
    dsColor?: MedColor;
    selected: boolean;
    dsSize?: 'xs' | 'sm' | 'md';
    margin?: 'xs' | 'sm' | 'md' | 'lg';
    border: boolean;
    collapsed: boolean;
    disabled: boolean;
    toggle(event?: Event): Promise<void>;
    render(): any;
}
