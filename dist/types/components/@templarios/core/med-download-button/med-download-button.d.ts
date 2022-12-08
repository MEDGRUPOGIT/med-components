import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedDownloadButton {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  value: number;
  /**
   * todo
   */
  downloading: boolean;
  /**
   * todo
   */
  downloaded: boolean;
  /**
   * remover
   */
  index?: number;
  /**
   * remover
   */
  identification?: string | number | undefined;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  dsSize?: 'lg';
  /**
   * todo
   */
  medDownloadRequested: EventEmitter;
  render(): any;
}
