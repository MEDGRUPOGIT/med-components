/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, e as writeTask, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as getIonMode, c as config } from './ionic-global-908d8380.js';
import { a as attachComponent, d as detachComponent } from './framework-delegate-362ab783.js';
import { B as BACKDROP, e as prepareOverlay, d as present, h as activeAnimations, f as dismiss, g as eventMethod } from './overlays-8f8e7296.js';
import { g as getClassMap } from './theme-d8e919ca.js';
import { e as deepReady } from './index-a9257133.js';
import { c as createAnimation } from './animation-f11d6630.js';
import { g as getTimeGivenProgression } from './cubic-bezier-89e16b6a.js';
import { createGesture } from './index-50c5db1b.js';
import { j as clamp } from './helpers-7c8ceac4.js';
import './platform-a3776365.js';
import './hardware-back-button-e98bcc7d.js';
import './gesture-controller-635d3a2b.js';

// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.93,
};
const createSwipeToCloseGesture = (el, animation, onDismiss) => {
  const height = el.offsetHeight;
  let isOpen = false;
  const canStart = (detail) => {
    const target = detail.event.target;
    if (target === null ||
      !target.closest) {
      return true;
    }
    const content = target.closest('ion-content');
    if (content === null) {
      return true;
    }
    // Target is in the content so we don't start the gesture.
    // We could be more nuanced here and allow it for content that
    // does not need to scroll.
    return false;
  };
  const onStart = () => {
    animation.progressStart(true, (isOpen) ? 1 : 0);
  };
  const onMove = (detail) => {
    const step = clamp(0.0001, detail.deltaY / height, 0.9999);
    animation.progressStep(step);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const step = clamp(0.0001, detail.deltaY / height, 0.9999);
    const threshold = (detail.deltaY + velocity * 1000) / height;
    const shouldComplete = threshold >= 0.5;
    let newStepValue = (shouldComplete) ? -0.001 : 0.001;
    if (!shouldComplete) {
      animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
      newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
    }
    else {
      animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
      newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
    }
    const duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    animation
      .onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    })
      .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);
    if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = createGesture({
    el,
    gestureName: 'modalSwipeToClose',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
const computeDuration = (remaining, velocity) => {
  return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};

/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, presentingEl) => {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
  const baseAnimation = createAnimation()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(500)
    .addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
    const presentingAnimation = createAnimation()
      .beforeStyles({
      'transform': 'translateY(0)',
      'transform-origin': 'top center',
      'overflow': 'hidden'
    });
    const bodyEl = document.body;
    if (isMobile) {
      /**
       * Fallback for browsers that does not support `max()` (ex: Firefox)
       * No need to worry about statusbar padding since engines like Gecko
       * are not used as the engine for standlone Cordova/Capacitor apps
       */
      const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation
        .afterStyles({
        'transform': finalTransform
      })
        .beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black'))
        .addElement(presentingEl)
        .keyframes([
        { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
        { offset: 1, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    }
    else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '0', '1');
      }
      else {
        const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation
          .afterStyles({
          'transform': finalTransform
        })
          .addElement(presentingEl.querySelector('.modal-wrapper'))
          .keyframes([
          { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
          { offset: 1, filter: 'contrast(0.85)', transform: finalTransform }
        ]);
        const shadowAnimation = createAnimation()
          .afterStyles({
          'transform': finalTransform
        })
          .addElement(presentingEl.querySelector('.modal-shadow'))
          .keyframes([
          { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
          { offset: 1, opacity: '0', transform: finalTransform }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  }
  else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};

/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
    .beforeStyles({ 'opacity': 1 })
    .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
  const baseAnimation = createAnimation()
    .addElement(baseEl)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .duration(duration)
    .addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
    const presentingAnimation = createAnimation()
      .beforeClearStyles(['transform'])
      .afterClearStyles(['transform'])
      .onFinish(currentStep => {
      // only reset background color if this is the last card-style modal
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty('overflow', '');
      const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty('background-color', '');
      }
    });
    const bodyEl = document.body;
    if (isMobile) {
      const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation
        .addElement(presentingEl)
        .keyframes([
        { offset: 0, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' },
        { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' }
      ]);
      baseAnimation.addAnimation(presentingAnimation);
    }
    else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '1', '0');
      }
      else {
        const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation
          .addElement(presentingEl.querySelector('.modal-wrapper'))
          .afterStyles({
          'transform': 'translate3d(0, 0, 0)'
        })
          .keyframes([
          { offset: 0, filter: 'contrast(0.85)', transform: finalTransform },
          { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' }
        ]);
        const shadowAnimation = createAnimation()
          .addElement(presentingEl.querySelector('.modal-shadow'))
          .afterStyles({
          'transform': 'translateY(0) scale(1)'
        })
          .keyframes([
          { offset: 0, opacity: '0', transform: finalTransform },
          { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' }
        ]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  }
  else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none'
  })
    .afterClearStyles(['pointer-events']);
  wrapperAnimation
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .keyframes([
    { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
  ]);
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(280)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const wrapperEl = baseEl.querySelector('.modal-wrapper');
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
  wrapperAnimation
    .addElement(wrapperEl)
    .keyframes([
    { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
    { offset: 1, opacity: 0, transform: 'translateY(40px)' }
  ]);
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.47,0,0.745,0.715)')
    .duration(200)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const iosModalMdCss = ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);background:rgba(0, 0, 0, 0.8)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:2px}.sc-ion-modal-ios-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0)}";

const modalMdCss = ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);background:rgba(0, 0, 0, 0.8)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0)}";

const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionModalDidPresent", 7);
    this.willPresent = createEvent(this, "ionModalWillPresent", 7);
    this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
    // Whether or not modal is being dismissed via gesture
    this.gestureAnimationDismissing = false;
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, BACKDROP);
    };
    this.onDismiss = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.dismiss();
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.component = undefined;
    this.componentProps = undefined;
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.showBackdrop = true;
    this.animated = true;
    this.swipeToClose = false;
    this.presentingElement = undefined;
  }
  swipeToCloseChanged(enable) {
    if (this.gesture) {
      this.gesture.enable(enable);
    }
    else if (enable) {
      this.initSwipeToClose();
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
  }
  /**
   * Present the modal overlay after it has been created.
   */
  async present() {
    if (this.presented) {
      return;
    }
    const container = this.el.querySelector(`.modal-wrapper`);
    if (!container) {
      throw new Error('container is undefined');
    }
    const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
    this.usersElement = await attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps);
    await deepReady(this.usersElement);
    writeTask(() => this.el.classList.add('show-modal'));
    await present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);
    if (this.swipeToClose) {
      this.initSwipeToClose();
    }
  }
  initSwipeToClose() {
    if (getIonMode(this) !== 'ios') {
      return;
    }
    // All of the elements needed for the swipe gesture
    // should be in the DOM and referenced by now, except
    // for the presenting el
    const animationBuilder = this.leaveAnimation || config.get('modalLeave', iosLeaveAnimation);
    const ani = this.animation = animationBuilder(this.el, this.presentingElement);
    this.gesture = createSwipeToCloseGesture(this.el, ani, () => {
      /**
       * While the gesture animation is finishing
       * it is possible for a user to tap the backdrop.
       * This would result in the dismiss animation
       * being played again. Typically this is avoided
       * by setting `presented = false` on the overlay
       * component; however, we cannot do that here as
       * that would prevent the element from being
       * removed from the DOM.
       */
      this.gestureAnimationDismissing = true;
      this.animation.onFinish(async () => {
        await this.dismiss(undefined, 'gesture');
        this.gestureAnimationDismissing = false;
      });
    });
    this.gesture.enable(true);
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   */
  async dismiss(data, role) {
    if (this.gestureAnimationDismissing && role !== 'gesture') {
      return false;
    }
    const enteringAnimation = activeAnimations.get(this) || [];
    const dismissed = await dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);
    if (dismissed) {
      await detachComponent(this.delegate, this.usersElement);
      if (this.animation) {
        this.animation.destroy();
      }
      enteringAnimation.forEach(ani => ani.destroy());
    }
    this.animation = undefined;
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, 'ionModalDidDismiss');
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, 'ionModalWillDismiss');
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { "no-router": true, "aria-modal": "true", tabindex: "-1", class: Object.assign({ [mode]: true, [`modal-card`]: this.presentingElement !== undefined && mode === 'ios' }, getClassMap(this.cssClass)), style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), mode === 'ios' && h("div", { class: "modal-shadow" }), h("div", { tabindex: "0" }), h("div", { role: "dialog", class: "modal-wrapper ion-overlay-wrapper" }), h("div", { tabindex: "0" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "swipeToClose": ["swipeToCloseChanged"]
  }; }
};
const LIFECYCLE_MAP = {
  'ionModalDidPresent': 'ionViewDidEnter',
  'ionModalWillPresent': 'ionViewWillEnter',
  'ionModalWillDismiss': 'ionViewWillLeave',
  'ionModalDidDismiss': 'ionViewDidLeave',
};
Modal.style = {
  ios: iosModalMdCss,
  md: modalMdCss
};

export { Modal as ion_modal };
