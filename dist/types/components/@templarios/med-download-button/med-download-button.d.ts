import { EventEmitter } from '../../../stencil-public-runtime';
import { MedColor } from '../../../@templarios/types/color.type';
export declare class MedDownloadButton {
    dsColor?: MedColor;
    value: number;
    downloading: boolean;
    downloaded: boolean;
    disabled: boolean;
    dsSize?: 'lg';
    /**
     * remover
     */
    index?: number;
    /**
     * remover
     */
    identification?: string | number | undefined;
    medDownloadRequested: EventEmitter;
    render(): any;
}
