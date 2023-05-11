import { MedColor } from "../../../../@templarios/types/color.type";
export declare class TpInputContainer {
  host: HTMLElement;
  hostWidth: number | undefined;
  selectWithPopoverClicked: boolean;
  pointerOnSelect: boolean;
  readonly selectAndPopoverDiffWidth: number;
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
  inverted: boolean;
  /**
   * todo
   */
  hasButton?: "start" | "end" | "both";
  /**
   * todo
   */
  hasIcon?: "start" | "end" | "both";
  getTpInputContainerWidth(e: MouseEvent): void;
  catchSelectIconClick(e: MouseEvent): void;
  setPopoverWidthOnResize(): void;
  setPopoverCharacteristics(): void;
  unsetClikedState(): void;
  componentDidLoad(): void;
  render(): any;
}
