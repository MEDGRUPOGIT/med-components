import { MedImagensZoomInterface } from './med-image-zoom-interface';
export declare class MedImageZoom {
  imagens: MedImagensZoomInterface[] | any;
  slider: any;
  title: any;
  ionSlideDidChangeHandler(): void;
  ionSlidesDidLoadHandler(): void;
  private sliderOpts;
  zoom(zoomIn: boolean): void;
  dismiss(): void;
  render(): any;
}
