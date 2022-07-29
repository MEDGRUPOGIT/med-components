import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
import { AnimationBuilder, RouterDirection } from '../../../../interface';
export declare class MedNavItem {
  hostElement: HTMLElement;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  active: boolean;
  /**
   * todo
   */
  text?: string;
  /**
   * todo
   */
  icon?: string;
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  routerDirection: RouterDirection;
  /**
   * todo
   */
  routerAnimation: AnimationBuilder | undefined;
  /**
   * todo
   */
  iconOnly: boolean;
  /**
   * todo
   */
  medFocus: EventEmitter<void>;
  /**
   * todo
   */
  medBlur: EventEmitter<void>;
  /**
   * todo
   */
  medClick: EventEmitter<void>;
  componentDidLoad(): void;
  private onFocus;
  private onBlur;
  render(): any;
}
