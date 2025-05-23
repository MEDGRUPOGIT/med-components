/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
const overlays = require('./overlays-20fa7e5b.js');
const index$1 = require('./index-bdb474dc.js');
const theme = require('./theme-cef66eda.js');
const animation = require('./animation-a79926bc.js');
require('./platform-df0a78a3.js');
require('./hardware-back-button-bef7bb33.js');
require('./helpers-a2cc981d.js');

/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const hostEl = baseEl.host || baseEl;
  const wrapperEl = baseEl.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
      break;
    case 'middle':
      const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
      break;
  }
  return baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.155,1.105,.295,1.12)')
    .duration(400)
    .addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const hostEl = baseEl.host || baseEl;
  const wrapperEl = baseEl.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
      break;
    case 'middle':
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
      break;
  }
  return baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(300)
    .addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const hostEl = baseEl.host || baseEl;
  const wrapperEl = baseEl.querySelector('.toast-wrapper');
  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    case 'middle':
      const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const hostEl = baseEl.host || baseEl;
  const wrapperEl = baseEl.querySelector('.toast-wrapper');
  wrapperAnimation
    .addElement(wrapperEl)
    .fromTo('opacity', 0.99, 0);
  return baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(300)
    .addAnimation(wrapperAnimation);
};

const toastIosCss = ".sc-ion-toast-ios-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}[dir=rtl].sc-ion-toast-ios-h,[dir=rtl] .sc-ion-toast-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-toast-ios-h{display:none}.ion-color.sc-ion-toast-ios-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-ios-h .toast-button-cancel.sc-ion-toast-ios{color:inherit}.ion-color.sc-ion-toast-ios-h .toast-wrapper.sc-ion-toast-ios{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-ios{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl].sc-ion-toast-ios .toast-wrapper.sc-ion-toast-ios,[dir=rtl].sc-ion-toast-ios-h .toast-wrapper.sc-ion-toast-ios,[dir=rtl] .sc-ion-toast-ios-h .toast-wrapper.sc-ion-toast-ios{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message.sc-ion-toast-ios{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group.sc-ion-toast-ios{display:-ms-flexbox;display:flex}.toast-button.sc-ion-toast-ios{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon.sc-ion-toast-ios{font-size:1.4em}.toast-button-inner.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button.sc-ion-toast-ios:hover{cursor:pointer}}.sc-ion-toast-ios-h{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper.sc-ion-toast-ios{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper.sc-ion-toast-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.toast-translucent.sc-ion-toast-ios-h .toast-wrapper.sc-ion-toast-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top.sc-ion-toast-ios{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle.sc-ion-toast-ios{opacity:0.01}.toast-wrapper.toast-bottom.sc-ion-toast-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content.sc-ion-toast-ios{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content.sc-ion-toast-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header.sc-ion-toast-ios{margin-bottom:2px;font-weight:500}.toast-button.sc-ion-toast-ios{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button.sc-ion-toast-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated.sc-ion-toast-ios{opacity:0.4}@media (any-hover: hover){.toast-button.sc-ion-toast-ios:hover{opacity:0.6}}";

const toastMdCss = ".sc-ion-toast-md-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}[dir=rtl].sc-ion-toast-md-h,[dir=rtl] .sc-ion-toast-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-toast-md-h{display:none}.ion-color.sc-ion-toast-md-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-md-h .toast-button-cancel.sc-ion-toast-md{color:inherit}.ion-color.sc-ion-toast-md-h .toast-wrapper.sc-ion-toast-md{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-md{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl].sc-ion-toast-md .toast-wrapper.sc-ion-toast-md,[dir=rtl].sc-ion-toast-md-h .toast-wrapper.sc-ion-toast-md,[dir=rtl] .sc-ion-toast-md-h .toast-wrapper.sc-ion-toast-md{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group.sc-ion-toast-md{display:-ms-flexbox;display:flex}.toast-button.sc-ion-toast-md{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon.sc-ion-toast-md{font-size:1.4em}.toast-button-inner.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button.sc-ion-toast-md:hover{cursor:pointer}}.sc-ion-toast-md-h{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper.sc-ion-toast-md{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper.sc-ion-toast-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content.sc-ion-toast-md{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header.sc-ion-toast-md{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message.sc-ion-toast-md{line-height:20px}.toast-button-group-start.sc-ion-toast-md{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start.sc-ion-toast-md{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end.sc-ion-toast-md{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end.sc-ion-toast-md{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button.sc-ion-toast-md{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel.sc-ion-toast-md{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only.sc-ion-toast-md{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button.sc-ion-toast-md:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel.sc-ion-toast-md:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";

const Toast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.didPresent = index.createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = index.createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = index.createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = index.createEvent(this, "ionToastDidDismiss", 7);
    this.presented = false;
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (overlays.isCancel(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = undefined;
    this.color = undefined;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.cssClass = undefined;
    this.duration = 0;
    this.header = undefined;
    this.message = undefined;
    this.keyboardClose = false;
    this.position = 'bottom';
    this.buttons = undefined;
    this.translucent = false;
    this.animated = true;
  }
  connectedCallback() {
    overlays.prepareOverlay(this.el);
  }
  /**
   * Present the toast overlay after it has been created.
   */
  async present() {
    await overlays.present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
    }
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return overlays.dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return overlays.eventMethod(this.el, 'ionToastDidDismiss');
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return overlays.eventMethod(this.el, 'ionToastWillDismiss');
  }
  getButtons() {
    const buttons = this.buttons
      ? this.buttons.map(b => {
        return (typeof b === 'string')
          ? { text: b }
          : b;
      })
      : [];
    return buttons;
  }
  async buttonClick(button) {
    const role = button.role;
    if (overlays.isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(undefined, role);
    }
    return Promise.resolve();
  }
  async callButtonHandler(button) {
    if (button && button.handler) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      try {
        const rtn = await overlays.safeCall(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      catch (e) {
        console.error(e);
      }
    }
    return true;
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = ionicGlobal.getIonMode(this);
    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true
    };
    return (index.h("div", { class: buttonGroupsClasses }, buttons.map(b => index.h("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b), part: "button" }, index.h("div", { class: "toast-button-inner" }, b.icon &&
      index.h("ion-icon", { icon: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "med-icon toast-icon" // templarios
      }), b.text), mode === 'md' && index.h("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })))));
  }
  render() {
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter(b => b.side === 'start');
    const endButtons = allButtons.filter(b => b.side !== 'start');
    const mode = ionicGlobal.getIonMode(this);
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true
    };
    return (index.h(index.Host, { style: {
        zIndex: `${60000 + this.overlayIndex}`,
      }, class: theme.createColorClasses(this.color, Object.assign(Object.assign({ [mode]: true }, theme.getClassMap(this.cssClass)), { 'toast-translucent': this.translucent })), tabindex: "-1", onIonToastWillDismiss: this.dispatchCancelHandler }, index.h("div", { class: wrapperClass }, index.h("div", { class: "toast-container", part: "container" }, this.renderButtons(startButtons, 'start'), index.h("div", { class: "toast-content" }, this.header !== undefined &&
      index.h("div", { class: "toast-header", part: "header" }, this.header), this.message !== undefined &&
      index.h("div", { class: "toast-message", part: "message", innerHTML: index$1.sanitizeDOMString(this.message) })), this.renderButtons(endButtons, 'end')))));
  }
  get el() { return index.getElement(this); }
};
const buttonClass = (button) => {
  return Object.assign({ 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined, [`toast-button-${button.role}`]: button.role !== undefined, 'ion-focusable': true, 'ion-activatable': true }, theme.getClassMap(button.cssClass));
};
Toast.style = {
  ios: toastIosCss,
  md: toastMdCss
};

exports.ion_toast = Toast;
