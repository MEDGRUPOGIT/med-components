import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedToggle {
    element?: HTMLElement;
    host: HTMLElement;
    dsColor?: MedColor;
    collapsed: boolean;
    iconClick: boolean;
    componentDidLoad(): void;
    setHeight(): void;
    open(): void;
    close(): void;
    toggle(): void;
    onClickComponent(): void;
    onClickIcon(): void;
    render(): any;
}
