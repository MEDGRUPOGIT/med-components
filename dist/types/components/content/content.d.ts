import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
import { Color, ScrollBaseDetail, ScrollDetail } from "../../interface";
/**
 * @slot - Content is placed in the scrollable area if provided without a slot.
 * @slot fixed - Should be used for fixed content that should not scroll.
 *
 * @part background - The background of the content.
 * @part scroll - The scrollable container of the content.
 */
export declare class Content implements ComponentInterface {
  private watchDog;
  private isScrolling;
  private lastScroll;
  private queued;
  private cTop;
  private cBottom;
  private scrollEl;
  private detail;
  el: HTMLIonContentElement;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  /**
   * If `true`, the content will scroll behind the headers
   * and footers. This effect can easily be seen by setting the toolbar
   * to transparent.
   */
  fullscreen: boolean;
  /**
   * If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
   * If the content exceeds the bounds of ionContent, nothing will change.
   * Note, the does not disable the system bounce on iOS. That is an OS level setting.
   */
  forceOverscroll?: boolean;
  /**
   * If you want to enable the content scrolling in the X axis, set this property to `true`.
   */
  scrollX: boolean;
  /**
   * If you want to disable the content scrolling in the Y axis, set this property to `false`.
   */
  scrollY: boolean;
  /**
   * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
   * and start listening from (ionScroll), set this property to `true`.
   */
  scrollEvents: boolean;
  /**
   * Show the scroll bar below breakpoint sm (576px)
   */
  showScrollBarMobile: boolean;
  /**
   * Emitted when the scroll has started.
   */
  ionScrollStart: EventEmitter<ScrollBaseDetail>;
  /**
   * Emitted while scrolling. This event is disabled by default.
   * Look at the property: `scrollEvents`
   */
  ionScroll: EventEmitter<ScrollDetail>;
  /**
   * Emitted when the scroll has ended.
   */
  ionScrollEnd: EventEmitter<ScrollBaseDetail>;
  disconnectedCallback(): void;
  onAppLoad(): void;
  onClick(ev: Event): void;
  private shouldForceOverscroll;
  private resize;
  private readDimensions;
  private onScroll;
  /**
   * Get the element where the actual scrolling takes place.
   * This element can be used to subscribe to `scroll` events or manually modify
   * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
   *
   * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
   * and `scrollToPoint()` to scroll the content into a certain point.
   */
  getScrollElement(): Promise<HTMLElement>;
  /**
   * Scroll to the top of the component.
   *
   * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
   */
  scrollToTop(duration?: number): Promise<void>;
  /**
   * Scroll to the bottom of the component.
   *
   * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
   */
  scrollToBottom(duration?: number): Promise<void>;
  /**
   * Scroll by a specified X/Y distance in the component.
   *
   * @param x The amount to scroll by on the horizontal axis.
   * @param y The amount to scroll by on the vertical axis.
   * @param duration The amount of time to take scrolling by that amount.
   */
  scrollByPoint(x: number, y: number, duration: number): Promise<void>;
  /**
   * Scroll to a specified X/Y location in the component.
   *
   * @param x The point to scroll to on the horizontal axis.
   * @param y The point to scroll to on the vertical axis.
   * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
   */
  scrollToPoint(x: number | undefined | null, y: number | undefined | null, duration?: number): Promise<void>;
  private onScrollStart;
  private onScrollEnd;
  render(): any;
}
