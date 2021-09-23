import { MedImageZoomItemInterface } from './med-image-zoom-interface';
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
  private sliderOpts;
  zoom(zoomIn: boolean): void;
  dismiss(): void;
  render(): any;
}
