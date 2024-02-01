import { EventEmitter } from '../../../stencil-public-runtime';
import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedCalendar {
    hostElement: any;
    dsColor?: MedColor;
    mes?: string;
    ano?: string;
    container?: string;
    disable: boolean;
    choice: string;
    width: number;
    medClick: EventEmitter;
    medSwipe: EventEmitter;
    private gesture;
    private containerEl;
    connectedCallback(): void;
    init(): void;
    watchPropHandler(newValue: any): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private onChoiceClick;
    private onMonthClick;
    render(): any;
}
