import { AnimationBuilder, ComponentProps, NavComponent } from '../../interface';
import { RouterDirection } from '../router/utils/interface';
export declare const navLink: (el: HTMLElement, routerDirection: RouterDirection, component?: NavComponent, componentProps?: ComponentProps, routerAnimation?: AnimationBuilder) => Promise<boolean>;
