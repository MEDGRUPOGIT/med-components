import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class MedEnunciado {
  /**
   * TODO
   */
  imagens: string[] | string;
  /**
   * TODO
   */
  medGalleryRequest: EventEmitter<string>;
  /**
   * TODO
   */
  dsName?: 'skin';
  private imageRequest;
  render(): any;
}
