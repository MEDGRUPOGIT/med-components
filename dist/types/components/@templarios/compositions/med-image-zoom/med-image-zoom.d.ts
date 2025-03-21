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
   * Zoom maximo na imagem em desktop
   */
  maxRatioDesktop: number;
  /**
   * Zoom maximo na imagem em Mobile
   */
  maxRatioMobile: number;
  /**
   * Referência ao componente no DOM
   */
  host: HTMLElement;
  /**
   * todo
   */
  slider: any;
  aplicandoZoom: boolean;
  /**
   * todo
   */
  sliderOpts: any;
  componentWillLoad(): void;
  componentDidLoad(): void;
  updateZoomButton(): void;
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
