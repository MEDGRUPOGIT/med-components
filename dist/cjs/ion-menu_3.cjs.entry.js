/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
const cubicBezier = require('./cubic-bezier-b395a59d.js');
const gestureController = require('./gesture-controller-935821e0.js');
const helpers = require('./helpers-a2cc981d.js');
const index$1 = require('./index-6c13720c.js');
const theme = require('./theme-cef66eda.js');
require('./platform-df0a78a3.js');
require('./hardware-back-button-bef7bb33.js');
require('./animation-a79926bc.js');

const menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";

const menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";

const iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
const mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
const iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
const mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionWillOpen = index.createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = index.createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = index.createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = index.createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = index.createEvent(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = gestureController.GESTURE_CONTROLLER.createBlocker({ disableScroll: true });
    this.isAnimating = false;
    this._isOpen = false;
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.contentId = undefined;
    this.menuId = undefined;
    this.type = undefined;
    this.disabled = false;
    this.side = 'start';
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute('style');
    }
    if (this.menuInnerEl) {
      // Remove effects of previous animations
      this.menuInnerEl.removeAttribute('style');
    }
    this.animation = undefined;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = helpers.isEndSide(this.side);
  }
  swipeGestureChanged() {
    this.updateState();
  }
  async connectedCallback() {
    if (this.type === undefined) {
      this.type = ionicGlobal.config.get('menuType', 'overlay');
    }
    const el = this.el;
    const parent = el.parentNode;
    if (this.contentId === undefined) {
      console.warn(`[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:
BEFORE:
  <ion-menu>...</ion-menu>
  <div main>...</div>

AFTER:
  <ion-menu contentId="main-content"></ion-menu>
  <div id="main-content">...</div>
`);
    }
    const content = this.contentId !== undefined
      ? document.getElementById(this.contentId)
      : parent && parent.querySelector && parent.querySelector('[main]');
    if (!content || !content.tagName) {
      // requires content element
      console.error('Menu: must have a "content" element to listen for drag events on.');
      return;
    }
    this.contentEl = content;
    // add menu's content classes
    content.classList.add('menu-content');
    this.typeChanged(this.type, undefined);
    this.sideChanged();
    // register this menu with the app's menu controller
    index$1.menuController._register(this);
    this.gesture = (await Promise.resolve().then(function () { return require('./index-ff2c537e.js'); })).createGesture({
      el: document,
      gestureName: 'menu-swipe',
      gesturePriority: 30,
      threshold: 10,
      blurOnStart: true,
      canStart: ev => this.canStart(ev),
      onWillStart: () => this.onWillStart(),
      onStart: () => this.onStart(),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),
    });
    this.updateState();
  }
  async componentDidLoad() {
    this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
    this.updateState();
  }
  disconnectedCallback() {
    this.blocker.destroy();
    index$1.menuController._unregister(this);
    if (this.animation) {
      this.animation.destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.animation = undefined;
    this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
  }
  onSplitPaneChanged(ev) {
    this.isPaneVisible = ev.detail.isPane(this.el);
    this.updateState();
  }
  onBackdropClick(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = (ev.composedPath)
        ? !ev.composedPath().includes(this.menuInnerEl)
        : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  close(animated = true) {
    return this.setOpen(false, animated);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  setOpen(shouldOpen, animated = true) {
    return index$1.menuController._setOpen(this, shouldOpen, animated);
  }
  async _setOpen(shouldOpen, animated = true) {
    // If the menu is disabled or it is currently being animated, let's do nothing
    if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
      return false;
    }
    this.beforeAnimation(shouldOpen);
    await this.loadAnimation();
    await this.startAnimation(shouldOpen, animated);
    this.afterAnimation(shouldOpen);
    return true;
  }
  async loadAnimation() {
    // Menu swipe animation takes the menu's inner width as parameter,
    // If `offsetWidth` changes, we need to create a new animation.
    const width = this.menuInnerEl.offsetWidth;
    if (width === this.width && this.animation !== undefined) {
      return;
    }
    this.width = width;
    // Destroy existing animation
    if (this.animation) {
      this.animation.destroy();
      this.animation = undefined;
    }
    // Create new animation
    this.animation = await index$1.menuController._createAnimation(this.type, this);
    if (!ionicGlobal.config.getBoolean('animated', true)) {
      this.animation.duration(0);
    }
    this.animation.fill('both');
  }
  async startAnimation(shouldOpen, animated) {
    const isReversed = !shouldOpen;
    const mode = ionicGlobal.getIonMode(this);
    const easing = mode === 'ios' ? iosEasing : mdEasing;
    const easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
    const ani = this.animation
      .direction((isReversed) ? 'reverse' : 'normal')
      .easing((isReversed) ? easingReverse : easing)
      .onFinish(() => {
      if (ani.getDirection() === 'reverse') {
        ani.direction('normal');
      }
    });
    if (animated) {
      await ani.play();
    }
    else {
      ani.play({ sync: true });
    }
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    // Do not allow swipe gesture if a modal is open
    const isModalPresented = !!document.querySelector('ion-modal.show-modal');
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
      // TODO error
    }
    else if (index$1.menuController._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    // the cloned animation should not use an easing curve during seek
    this.animation.progressStart(true, (this._isOpen) ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep((this._isOpen) ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2.0;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen
      ? isEndSide ? shouldCompleteRight : shouldCompleteLeft
      : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    // Account for rounding errors in JS
    let newStepValue = (shouldComplete) ? 0.001 : -0.001;
    /**
     * TODO: stepValue can sometimes return a negative
     * value, but you can't have a negative time value
     * for the cubic bezier curve (at least with web animations)
     * Not sure if the negative step value is an error or not
     */
    const adjustedStepValue = (stepValue < 0) ? 0.01 : stepValue;
    /**
     * Animation will be reversed here, so need to
     * reverse the easing curve as well
     *
     * Additionally, we need to account for the time relative
     * to the new easing curve, as `stepValue` is going to be given
     * in terms of a linear curve.
     */
    newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.4, 0], [0.6, 1], [1, 1], helpers.clamp(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = (this._isOpen) ? !shouldComplete : shouldComplete;
    this.animation
      .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
      .onFinish(() => this.afterAnimation(shouldOpen), { oneTimeCallback: true })
      .progressEnd((playTo) ? 1 : 0, (this._isOpen) ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen) {
    helpers.assert(!this.isAnimating, '_before() should not be called while animating');
    // this places the menu into the correct location before it animates in
    // this css class doesn't actually kick off any animations
    this.el.classList.add(SHOW_MENU);
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    }
    else {
      this.ionWillClose.emit();
    }
  }
  afterAnimation(isOpen) {
    helpers.assert(this.isAnimating, '_before() should be called while animating');
    // keep opening/closing the menu disabled for a touch more yet
    // only add listeners/css if it's enabled and isOpen
    // and only remove listeners/css if it's not open
    // emit opened/closed events
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      // add css class
      if (this.contentEl) {
        this.contentEl.classList.add(MENU_CONTENT_OPEN);
      }
      // emit open event
      this.ionDidOpen.emit();
    }
    else {
      // remove css classes
      this.el.classList.remove(SHOW_MENU);
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      // emit close event
      this.ionDidClose.emit();
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    // Close menu immediately
    if (!isActive && this._isOpen) {
      // close if this menu is open, and should not be enabled
      this.forceClosing();
    }
    if (!this.disabled) {
      index$1.menuController._setActiveMenu(this);
    }
    helpers.assert(!this.isAnimating, 'can not be animating');
  }
  forceClosing() {
    helpers.assert(this._isOpen, 'menu cannot be closed');
    this.isAnimating = true;
    const ani = this.animation.direction('reverse');
    ani.play({ sync: true });
    this.afterAnimation(false);
  }
  render() {
    const { isEndSide, type, disabled, isPaneVisible } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "navigation", class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        'menu-enabled': !disabled,
        'menu-side-end': isEndSide,
        'menu-side-start': !isEndSide,
        'menu-pane-visible': isPaneVisible
      } }, index.h("div", { class: "menu-inner", part: "container", ref: el => this.menuInnerEl = el }, index.h("slot", null)), index.h("ion-backdrop", { ref: el => this.backdropEl = el, class: "menu-backdrop", tappable: false, stopPropagation: false, part: "backdrop" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "type": ["typeChanged"],
    "disabled": ["disabledChanged"],
    "side": ["sideChanged"],
    "swipeGesture": ["swipeGestureChanged"]
  }; }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  }
  else {
    return posX <= maxEdgeStart;
  }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';
Menu.style = {
  ios: menuIosCss,
  md: menuMdCss
};

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
  const menuEl = await index$1.menuController.get(menu);
  return !!(menuEl && await menuEl.isActive());
};

const menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";

const menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";

const MenuButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClick = async () => {
      return index$1.menuController.toggle(this.menu);
    };
    this.visible = false;
    this.color = undefined;
    this.disabled = false;
    this.menu = undefined;
    this.autoHide = true;
    this.type = 'button';
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const { color, disabled } = this;
    const mode = ionicGlobal.getIonMode(this);
    const menuIcon = ionicGlobal.config.get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    return (index.h(index.Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: theme.createColorClasses(color, {
        [mode]: true,
        'button': true,
        'menu-button-hidden': hidden,
        'menu-button-disabled': disabled,
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
        'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
        'ion-activatable': true,
        'ion-focusable': true
      }) }, index.h("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native", part: "native", "aria-label": "menu" }), index.h("span", { class: "button-inner" }, index.h("slot", null, index.h("ion-icon", { class: "med-icon", part: "icon", icon: menuIcon, mode: mode, lazy: false, "aria-hidden": "true" }))), mode === 'md' && index.h("ion-ripple-effect", { type: "unbounded" }))));
  }
  get el() { return index.getElement(this); }
};
MenuButton.style = {
  ios: menuButtonIosCss,
  md: menuButtonMdCss
};

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClick = () => {
      return index$1.menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (index.h(index.Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, index.h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

exports.ion_menu = Menu;
exports.ion_menu_button = MenuButton;
exports.ion_menu_toggle = MenuToggle;
