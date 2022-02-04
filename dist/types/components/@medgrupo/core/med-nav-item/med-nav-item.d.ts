import { EventEmitter } from '../../../../stencil-public-runtime';
import { AnimationBuilder, MedColor, RouterDirection } from '../../../../interface';
export declare class MedNavItem {
  hostElement: HTMLElement;
  /**
    * TODO.
    */
  dsColor?: MedColor;
  /**
    * TODO.
    */
  active: boolean;
  /**
    * TODO.
    */
  text?: string;
  /**
    * TODO.
    */
  icon?: string;
  /**
    * TODO.
    */
  disabled: boolean;
  /**
    * TODO.
    */
  routerDirection: RouterDirection;
  /**
    * TODO.
    */
  routerAnimation: AnimationBuilder | undefined;
  /**
    * TODO.
    */
  iconOnly: boolean;
  /**
    * TODO.
    */
  medFocus: EventEmitter<void>;
  /**
    * TODO.
    */
  medBlur: EventEmitter<void>;
  /**
    * TODO.
    */
  medClick: EventEmitter<void>;
  componentDidLoad(): void;
  private onFocus;
  private onBlur;
  render(): any;
}
