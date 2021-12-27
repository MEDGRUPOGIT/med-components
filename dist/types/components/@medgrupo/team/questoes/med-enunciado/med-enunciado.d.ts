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
   * Define a variação do componente.
   */
  dsName?: 'skin';
  private imageRequest;
  render(): any;
}
