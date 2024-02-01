import { ComponentInterface, EventEmitter } from '../../../stencil-public-runtime';
import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedAccordionItem implements ComponentInterface {
    hostElement: any;
    dsColor?: MedColor;
    noBorder: boolean;
    background: boolean;
    canCollapse: boolean;
    isOpened: boolean;
    slotsToggle: 'start' | 'middle' | 'end'[];
    toggle: EventEmitter;
    opened: EventEmitter;
    medClick: EventEmitter;
    isOpen: boolean;
    watchPropHandler(newValue: boolean): void;
    componentDidLoad(): void;
    private content;
    private header;
    private isTransitioning;
    private onClick;
    private toggleOpen;
    private onHeaderClick;
    render(): any;
}
