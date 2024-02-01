import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedChartBar {
    private hostHeight;
    private hostResizeObserver;
    hostElement: HTMLElement;
    dsColor?: MedColor;
    value: number;
    height: number;
    width: number;
    noLabel: boolean;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private setSize;
    render(): any;
}
