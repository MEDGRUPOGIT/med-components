import { EventEmitter } from '../../../stencil-public-runtime';
export declare class MedEnunciado {
    imagens: string[] | string;
    medGalleryRequest: EventEmitter<string>;
    dsName?: 'skin';
    content?: string;
    private imageRequest;
    render(): any;
}
