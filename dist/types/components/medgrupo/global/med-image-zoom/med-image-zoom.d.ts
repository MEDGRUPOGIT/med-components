import { MedImageZoomItemInterface } from './med-image-zoom-interface';
export declare class MedImageZoom {
  imagens: MedImageZoomItemInterface[] | any;
  marcaAguaSuperior?: string;
  marcaAguaInferior?: string;
  titulo?: string;
  slider: any;
  private sliderOpts;
  zoom(zoomIn: boolean): void;
  dismiss(): void;
  render(): any;
}
