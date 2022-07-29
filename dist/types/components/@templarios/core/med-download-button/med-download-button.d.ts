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
  initial: boolean;
  /**
   * todo
   */
  downloading: boolean;
  /**
   * todo
   */
  downloaded: boolean;
  /**
   * todo
   */
  index?: number;
  /**
   * todo
   */
  identification?: string | number | undefined;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  medDownloaded: EventEmitter;
  /**
   * todo
   */
  medCancelar: EventEmitter;
  /**
   * todo
   */
  medDownloading: EventEmitter;
  downloadedChanged(): void;
  downloadingChange(): void;
  valueChanged(): void;
  toggle(event?: Event): void;
  render(): any;
}
