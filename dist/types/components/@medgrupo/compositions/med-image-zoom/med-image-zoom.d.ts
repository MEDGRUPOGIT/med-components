import { MedImageZoomItemInterface } from "./med-image-zoom-interface";
export declare class MedImageZoom {
  /**
   * TODO
   */
  imagens: MedImageZoomItemInterface[] | any;
  /**
   * TODO
   */
  marcaAguaSuperior?: string;
  /**
   * TODO
   */
  marcaAguaInferior?: string;
  /**
   * TODO
   */
  titulo?: string;
  slider: any;
  defaultMaxRatio: number;
  aplicandoZoom: boolean;
  sliderOpts: {
    zoom: {
      maxRatio: number;
    };
    intialSlide: number;
  };
  getSliderOpts(maxRatio: number): {
    zoom: {
      maxRatio: number;
    };
    intialSlide: number;
  };
  zoomOut(): Promise<void>;
  zoomIn(): Promise<void>;
  dismiss(): void;
  render(): any;
}
