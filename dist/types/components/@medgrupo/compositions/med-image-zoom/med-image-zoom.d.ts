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
