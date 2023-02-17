import { MedColor } from '../../../../@templarios/types/color.type';
export declare class MedToggle {
  host: HTMLElement;
  element?: HTMLElement;
  /**
 * todo
 */
  dsColor?: MedColor;
  /**
 * todo
 */
  collapsed: boolean;
  componentDidLoad(): void;
  setHeight(): void;
  open(): void;
  close(): void;
  toggle(): void;
  render(): any;
}
