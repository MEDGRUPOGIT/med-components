import { EventEmitter } from '../../../../stencil-public-runtime';
import { AnimationBuilder, MedColor, RouterDirection } from '../../../../interface';
export declare class MedNavItem {
  hostElement: HTMLElement;
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o estado active do componente.
    */
  active: boolean;
  /**
    * Define o texto do componente.
    */
  text?: string;
  /**
    * Define o icone do componente.
    */
  icon?: string;
  /**
    * Define o estado disabled do componente.
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
