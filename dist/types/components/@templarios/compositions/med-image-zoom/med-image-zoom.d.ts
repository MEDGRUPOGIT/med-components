import { MedImageZoomItemInterface } from "../../../../@templarios/interfaces/image-zoom.interface";
export declare class MedImageZoom {
  /**
   * todo
   */
  imagens: MedImageZoomItemInterface[] | any;
  /**
   * todo
   */
  marcaAguaSuperior?: string;
  /**
   * todo
   */
  marcaAguaInferior?: string;
  /**
   * todo
   */
  titulo?: string;
  /**
   * todo
   */
  initialSlide?: number | undefined;
  /**
   * todo
   */
  slider: any;
  defaultMaxRatio: number;
  aplicandoZoom: boolean;
  /**
   * todo
   */
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
