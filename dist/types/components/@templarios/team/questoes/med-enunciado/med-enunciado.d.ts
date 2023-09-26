import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class MedEnunciado {
  /**
   * todo
   */
  imagens: string[] | string;
  /**
   * todo
   */
  medGalleryRequest: EventEmitter<string>;
  /**
   * todo
   */
  dsName?: 'skin';
  /**
 * todo
 */
  content?: string;
  private imageRequest;
  render(): any;
}
