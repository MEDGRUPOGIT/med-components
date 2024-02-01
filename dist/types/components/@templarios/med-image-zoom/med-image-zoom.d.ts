import { MedImageZoomItemInterface } from "../../../@templarios/interfaces/image-zoom.interface";
export declare class MedImageZoom {
    imagens: MedImageZoomItemInterface[] | any;
    marcaAguaSuperior?: string;
    marcaAguaInferior?: string;
    titulo?: string;
    initialSlide?: number | undefined;
    slider: any;
    defaultMaxRatio: number;
    aplicandoZoom: boolean;
    sliderOpts: {
        zoom: {
            maxRatio: number;
        };
        initialSlide: number | undefined;
    };
    getSliderOpts(maxRatio: number): {
        zoom: {
            maxRatio: number;
        };
        initialSlide: number | undefined;
    };
    zoomOut(): Promise<void>;
    zoomIn(): Promise<void>;
    dismiss(): void;
    render(): any;
}
