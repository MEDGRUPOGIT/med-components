/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
const frameworkDelegate = require('./framework-delegate-742b6da2.js');
const overlays = require('./overlays-20fa7e5b.js');
const theme = require('./theme-cef66eda.js');
const index$1 = require('./index-bc955683.js');
const animation = require('./animation-a79926bc.js');
require('./platform-df0a78a3.js');
require('./helpers-a2cc981d.js');
require('./hardware-back-button-bef7bb33.js');

/**
 * iOS Popover Enter Animation
 */
const iosEnterAnimation = (baseEl, ev) => {
  let originY = 'top';
  let originX = 'left';
  const contentEl = baseEl.querySelector('.popover-content');
  const contentDimentions = contentEl.getBoundingClientRect();
  const contentWidth = contentDimentions.width;
  const contentHeight = contentDimentions.height;
  const bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
  const bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;
  // If ev was passed, use that for target element
  const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
  const targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
  const targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
  const targetWidth = (targetDim && targetDim.width) || 0;
  const targetHeight = (targetDim && targetDim.height) || 0;
  const arrowEl = baseEl.querySelector('.popover-arrow');
  const arrowDim = arrowEl.getBoundingClientRect();
  const arrowWidth = arrowDim.width;
  const arrowHeight = arrowDim.height;
  if (targetDim == null) {
    arrowEl.style.display = 'none';
  }
  const arrowCSS = {
    top: targetTop + targetHeight,
    left: targetLeft + targetWidth / 2 - arrowWidth / 2
  };
  const popoverCSS = {
    top: targetTop + targetHeight + (arrowHeight - 1),
    left: targetLeft + targetWidth / 2 - contentWidth / 2
  };
  // If the popover left is less than the padding it is off screen
  // to the left so adjust it, else if the width of the popover
  // exceeds the body width it is off screen to the right so adjust
  //
  let checkSafeAreaLeft = false;
  let checkSafeAreaRight = false;
  // If the popover left is less than the padding it is off screen
  // to the left so adjust it, else if the width of the popover
  // exceeds the body width it is off screen to the right so adjust
  // 25 is a random/arbitrary number. It seems to work fine for ios11
  // and iPhoneX. Is it perfect? No. Does it work? Yes.
  if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
    checkSafeAreaLeft = true;
    popoverCSS.left = POPOVER_IOS_BODY_PADDING;
  }
  else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
    // Ok, so we're on the right side of the screen,
    // but now we need to make sure we're still a bit further right
    // cus....notchurally... Again, 25 is random. It works tho
    checkSafeAreaRight = true;
    popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
    originX = 'right';
  }
  // make it pop up if there's room above
  if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
    arrowCSS.top = targetTop - (arrowHeight + 1);
    popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
    baseEl.className = baseEl.className + ' popover-bottom';
    originY = 'bottom';
    // If there isn't room for it to pop up above the target cut it off
  }
  else if (targetTop + targetHeight + contentHeight > bodyHeight) {
    contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
  }
  arrowEl.style.top = arrowCSS.top + 'px';
  arrowEl.style.left = arrowCSS.left + 'px';
  contentEl.style.top = popoverCSS.top + 'px';
  contentEl.style.left = popoverCSS.left + 'px';
  if (checkSafeAreaLeft) {
    contentEl.style.left = `calc(${popoverCSS.left}px + var(--ion-safe-area-left, 0px))`;
  }
  if (checkSafeAreaRight) {
    contentEl.style.left = `calc(${popoverCSS.left}px - var(--ion-safe-area-right, 0px))`;
  }
  contentEl.style.transformOrigin = originY + ' ' + originX;
  const baseAnimation = animation.createAnimation();
  const backdropAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  wrapperAnimation
    .addElement(baseEl.querySelector('.popover-wrapper'))
    .fromTo('opacity', 0.01, 1);
  return baseAnimation
    .addElement(baseEl)
    .easing('ease')
    .duration(100)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
const POPOVER_IOS_BODY_PADDING = 5;

/**
 * iOS Popover Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
  const baseAnimation = animation.createAnimation();
  const backdropAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation
    .addElement(baseEl.querySelector('.popover-wrapper'))
    .fromTo('opacity', 0.99, 0);
  return baseAnimation
    .addElement(baseEl)
    .easing('ease')
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Popover Enter Animation
 */
const mdEnterAnimation = (baseEl, ev) => {
  const POPOVER_MD_BODY_PADDING = 12;
  const doc = baseEl.ownerDocument;
  const isRTL = doc.dir === 'rtl';
  let originY = 'top';
  let originX = isRTL ? 'right' : 'left';
  const contentEl = baseEl.querySelector('.popover-content');
  const contentDimentions = contentEl.getBoundingClientRect();
  const contentWidth = contentDimentions.width;
  const contentHeight = contentDimentions.height;
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;
  // If ev was passed, use that for target element
  const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
  // As per MD spec, by default position the popover below the target (trigger) element
  const targetTop = targetDim != null && 'bottom' in targetDim
    ? targetDim.bottom
    : bodyHeight / 2 - contentHeight / 2;
  const targetLeft = targetDim != null && 'left' in targetDim
    ? isRTL
      ? targetDim.left - contentWidth + targetDim.width
      : targetDim.left
    : bodyWidth / 2 - contentWidth / 2;
  const targetHeight = (targetDim && targetDim.height) || 0;
  const popoverCSS = {
    top: targetTop,
    left: targetLeft
  };
  // If the popover left is less than the padding it is off screen
  // to the left so adjust it, else if the width of the popover
  // exceeds the body width it is off screen to the right so adjust
  if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
    popoverCSS.left = POPOVER_MD_BODY_PADDING;
    // Same origin in this case for both LTR & RTL
    // Note: in LTR, originX is already 'left'
    originX = 'left';
  }
  else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
    bodyWidth) {
    popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
    // Same origin in this case for both LTR & RTL
    // Note: in RTL, originX is already 'right'
    originX = 'right';
  }
  // If the popover when popped down stretches past bottom of screen,
  // make it pop up if there's room above
  if (targetTop + targetHeight + contentHeight > bodyHeight &&
    targetTop - contentHeight > 0) {
    popoverCSS.top = targetTop - contentHeight - targetHeight;
    baseEl.className = baseEl.className + ' popover-bottom';
    originY = 'bottom';
    // If there isn't room for it to pop up above the target cut it off
  }
  else if (targetTop + targetHeight + contentHeight > bodyHeight) {
    contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
  }
  const baseAnimation = animation.createAnimation();
  const backdropAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const contentAnimation = animation.createAnimation();
  const viewportAnimation = animation.createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  wrapperAnimation
    .addElement(baseEl.querySelector('.popover-wrapper'))
    .fromTo('opacity', 0.01, 1);
  contentAnimation
    .addElement(contentEl)
    .beforeStyles({
    'top': `${popoverCSS.top}px`,
    'left': `${popoverCSS.left}px`,
    'transform-origin': `${originY} ${originX}`
  })
    .fromTo('transform', 'scale(0.001)', 'scale(1)');
  viewportAnimation
    .addElement(baseEl.querySelector('.popover-viewport'))
    .fromTo('opacity', 0.01, 1);
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(300)
    .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};

/**
 * Md Popover Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
  const baseAnimation = animation.createAnimation();
  const backdropAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation
    .addElement(baseEl.querySelector('.popover-wrapper'))
    .fromTo('opacity', 0.99, 0);
  return baseAnimation
    .addElement(baseEl)
    .easing('ease')
    .duration(500)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const popoverIosCss = ".sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--tp-scroll-color-content:hsl(var(--med-color-neutral-4));--tp-scroll-width:9px;-webkit-scroll-snap-type:both mandatory;-ms-scroll-snap-type:both mandatory;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.sc-ion-popover-ios::-webkit-scrollbar{width:var(--tp-scroll-width);height:9px}@media (max-width: 576px){.sc-ion-popover-ios::-webkit-scrollbar{width:0}}.sc-ion-popover-ios::-webkit-scrollbar-track{background:transparent}.sc-ion-popover-ios::-webkit-scrollbar-thumb{color:hsl(var(--med-color-neutral-4))}.sc-ion-popover-ios::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.sc-ion-popover-ios::-webkit-scrollbar-thumb{background-clip:content-box;border:4px solid transparent;border-radius:7px;-webkit-box-shadow:inset 0 0 0 10px;box-shadow:inset 0 0 0 10px}.sc-ion-popover-ios::-webkit-scrollbar-button{width:0;height:0;display:none}.sc-ion-popover-ios::-webkit-scrollbar-corner{background-color:transparent}.inner-scroll.sc-ion-popover-ios:hover::-webkit-scrollbar-thumb{color:var(--tp-scroll-color-content)}.tp-popover--secondary.sc-ion-popover-ios-h{--tp-scroll-color-content:hsl(var(--med-color-neutral-3))}.tp-popover--secondary.sc-ion-popover-ios-h .sc-ion-popover-ios::-webkit-scrollbar-thumb{color:hsl(var(--med-color-neutral-3))}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}";

const popoverMdCss = ".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--tp-scroll-color-content:hsl(var(--med-color-neutral-4));--tp-scroll-width:9px;-webkit-scroll-snap-type:both mandatory;-ms-scroll-snap-type:both mandatory;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}.sc-ion-popover-md::-webkit-scrollbar{width:var(--tp-scroll-width);height:9px}@media (max-width: 576px){.sc-ion-popover-md::-webkit-scrollbar{width:0}}.sc-ion-popover-md::-webkit-scrollbar-track{background:transparent}.sc-ion-popover-md::-webkit-scrollbar-thumb{color:hsl(var(--med-color-neutral-4))}.sc-ion-popover-md::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}.sc-ion-popover-md::-webkit-scrollbar-thumb{background-clip:content-box;border:4px solid transparent;border-radius:7px;-webkit-box-shadow:inset 0 0 0 10px;box-shadow:inset 0 0 0 10px}.sc-ion-popover-md::-webkit-scrollbar-button{width:0;height:0;display:none}.sc-ion-popover-md::-webkit-scrollbar-corner{background-color:transparent}.inner-scroll.sc-ion-popover-md:hover::-webkit-scrollbar-thumb{color:var(--tp-scroll-color-content)}.tp-popover--secondary.sc-ion-popover-md-h{--tp-scroll-color-content:hsl(var(--med-color-neutral-3))}.tp-popover--secondary.sc-ion-popover-md-h .sc-ion-popover-md::-webkit-scrollbar-thumb{color:hsl(var(--med-color-neutral-3))}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";

const Popover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.didPresent = index.createEvent(this, "ionPopoverDidPresent", 7);
    this.willPresent = index.createEvent(this, "ionPopoverWillPresent", 7);
    this.willDismiss = index.createEvent(this, "ionPopoverWillDismiss", 7);
    this.didDismiss = index.createEvent(this, "ionPopoverDidDismiss", 7);
    this.presented = false;
    this.onDismiss = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.dismiss();
    };
    this.onBackdropTap = () => {
      this.dismiss(undefined, overlays.BACKDROP);
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const event = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(event);
      }
    };
    this.delegate = undefined;
    this.overlayIndex = undefined;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.component = undefined;
    this.componentProps = undefined;
    this.keyboardClose = true;
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.event = undefined;
    this.showBackdrop = true;
    this.translucent = false;
    this.animated = true;
  }
  connectedCallback() {
    overlays.prepareOverlay(this.el);
  }
  /**
   * Present the popover overlay after it has been created.
   */
  async present() {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector('.popover-content');
    if (!container) {
      throw new Error('container is undefined');
    }
    const data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });
    this.usersElement = await frameworkDelegate.attachComponent(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data);
    await index$1.deepReady(this.usersElement);
    return overlays.present(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event);
  }
  /**
   * Dismiss the popover overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
   */
  async dismiss(data, role) {
    const shouldDismiss = await overlays.dismiss(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);
    if (shouldDismiss) {
      await frameworkDelegate.detachComponent(this.delegate, this.usersElement);
    }
    return shouldDismiss;
  }
  /**
   * Returns a promise that resolves when the popover did dismiss.
   */
  onDidDismiss() {
    return overlays.eventMethod(this.el, 'ionPopoverDidDismiss');
  }
  /**
   * Returns a promise that resolves when the popover will dismiss.
   */
  onWillDismiss() {
    return overlays.eventMethod(this.el, 'ionPopoverWillDismiss');
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const { onLifecycle } = this;
    return (index.h(index.Host, { "aria-modal": "true", "no-router": true, tabindex: "-1", style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, class: Object.assign(Object.assign({}, theme.getClassMap(this.cssClass)), { [mode]: true, 'popover-translucent': this.translucent }), onIonPopoverDidPresent: onLifecycle, onIonPopoverWillPresent: onLifecycle, onIonPopoverWillDismiss: onLifecycle, onIonPopoverDidDismiss: onLifecycle, onIonDismiss: this.onDismiss, onIonBackdropTap: this.onBackdropTap }, index.h("ion-backdrop", { tappable: this.backdropDismiss, visible: this.showBackdrop }), index.h("div", { tabindex: "0" }), index.h("div", { class: "popover-wrapper ion-overlay-wrapper" }, index.h("div", { class: "popover-arrow" }), index.h("div", { class: "popover-content" })), index.h("div", { tabindex: "0" })));
  }
  get el() { return index.getElement(this); }
};
const LIFECYCLE_MAP = {
  'ionPopoverDidPresent': 'ionViewDidEnter',
  'ionPopoverWillPresent': 'ionViewWillEnter',
  'ionPopoverWillDismiss': 'ionViewWillLeave',
  'ionPopoverDidDismiss': 'ionViewDidLeave',
};
Popover.style = {
  ios: popoverIosCss,
  md: popoverMdCss
};

exports.ion_popover = Popover;
