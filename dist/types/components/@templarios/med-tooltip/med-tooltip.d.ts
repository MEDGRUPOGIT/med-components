import { EventEmitter } from '../../../stencil-public-runtime';
import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedTooltip {
    enableHover?: boolean;
    dsColor?: MedColor;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    position?: 'start' | 'center' | 'end';
    titulo?: string;
    content?: string;
    btnLeft?: string;
    btnRight?: string;
    collapsed: boolean;
    btnLeftClick: EventEmitter<void>;
    btnRightClick: EventEmitter<void>;
    toggle(event?: any): Promise<void>;
    toggleOnHover(event?: any): Promise<void>;
    handleClick(event?: any): void;
    private onBtnLeftClick;
    private onBtnRightClick;
    render(): any;
}
