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
  /**
  * todo
  */
  iconClick: boolean;
  componentDidLoad(): void;
  setHeight(): void;
  open(): void;
  close(): void;
  toggle(): void;
  onClickComponent(): void;
  onClickIcon(): void;
  render(): any;
}
