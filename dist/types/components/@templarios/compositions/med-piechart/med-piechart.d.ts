import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedPiechart {
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsSize?: 'sm';
  /**
   * todo
   */
  download: boolean;
  /**
   * todo
   */
  downloaded: boolean;
  /**
   * todo
   */
  label?: string;
  /**
   * todo
   */
  value: number;
  /**
   * todo
   */
  downloadProgress: number;
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
  hideDownload: boolean;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  toggle(event?: Event): Promise<void>;
  /**
   * todo
   */
  Isdownloaded(event?: CustomEvent): void;
  render(): any;
}
