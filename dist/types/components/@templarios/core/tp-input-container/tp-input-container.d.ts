import { MedColor } from "../../../../@templarios/types/color.type";
export declare class TpInputContainer {
  host: HTMLElement;
  hostWidth: number | undefined;
  selectClicked: boolean;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsName?: "secondary";
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  feedback: boolean;
  /**
   * todo
   */
  hasButton?: "start" | "end" | "both";
  /**
   * todo
   */
  hasIcon?: "start" | "end" | "both";
  getTpInputContainerWidth(e: MouseEvent): void;
  setPopoverWidthOnResize(): void;
  setPopoverWidth(): void;
  unsetClikedState(): void;
  render(): any;
}
