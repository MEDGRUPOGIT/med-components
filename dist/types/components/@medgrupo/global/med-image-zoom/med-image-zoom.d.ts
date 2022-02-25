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
  sleep(time?: number): Promise<void>;
  zoomIn(increment?: number): Promise<void>;
  zoomOut(): Promise<void>;
  dismiss(): void;
  render(): any;
}
