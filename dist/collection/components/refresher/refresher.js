/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, readTask, writeTask } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { getTimeGivenProgression } from '../../utils/animation/cubic-bezier';
import { clamp, componentOnReady, getElementRoot, raf } from '../../utils/helpers';
import { hapticImpact } from '../../utils/native/haptic';
import { createPullingAnimation, createSnapBackAnimation, getRefresherAnimationType, handleScrollWhilePulling, handleScrollWhileRefreshing, setSpinnerOpacity, shouldUseNativeRefresher, transitionEndAsync, translateElement } from './refresher.utils';
export class Refresher {
  constructor() {
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1 /* RefresherState.Inactive */;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = '280ms';
    this.snapbackDuration = '280ms';
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  async checkNativeRefresher() {
    const useNativeRefresher = await shouldUseNativeRefresher(this.el, getIonMode(this));
    if (useNativeRefresher && !this.nativeRefresher) {
      const contentEl = this.el.closest('ion-content');
      this.setupNativeRefresher(contentEl);
    }
    else if (!useNativeRefresher) {
      this.destroyNativeRefresher();
    }
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
      this.scrollListenerCallback = undefined;
    }
    this.nativeRefresher = false;
  }
  async resetNativeRefresher(el, state) {
    this.state = state;
    if (getIonMode(this) === 'ios') {
      await translateElement(el, undefined);
    }
    else {
      await transitionEndAsync(this.el.querySelector('.refresher-refreshing-icon'), 200);
    }
    this.didRefresh = false;
    this.needsCompletion = false;
    this.pointerDown = false;
    this.animations.forEach(ani => ani.destroy());
    this.animations = [];
    this.progress = 0;
    this.state = 1 /* RefresherState.Inactive */;
  }
  async setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    this.elementToTransform = this.scrollEl;
    const ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
    let MAX_PULL = this.scrollEl.clientHeight * 0.16;
    const NUM_TICKS = ticks.length;
    writeTask(() => ticks.forEach(el => el.style.setProperty('animation', 'none')));
    this.scrollListenerCallback = () => {
      // If pointer is not on screen or refresher is not active, ignore scroll
      if (!this.pointerDown && this.state === 1 /* RefresherState.Inactive */) {
        return;
      }
      readTask(() => {
        // PTR should only be active when overflow scrolling at the top
        const scrollTop = this.scrollEl.scrollTop;
        const refresherHeight = this.el.clientHeight;
        if (scrollTop > 0) {
          /**
           * If refresher is refreshing and user tries to scroll
           * progressively fade refresher out/in
           */
          if (this.state === 8 /* RefresherState.Refreshing */) {
            const ratio = clamp(0, scrollTop / (refresherHeight * 0.5), 1);
            writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
            return;
          }
          writeTask(() => setSpinnerOpacity(pullingSpinner, 0));
          return;
        }
        if (this.pointerDown) {
          if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
          }
          // emit "pulling" on every move
          if (this.pointerDown) {
            this.ionPull.emit();
          }
        }
        // delay showing the next tick marks until user has pulled 30px
        const opacity = clamp(0, Math.abs(scrollTop) / refresherHeight, 0.99);
        const pullAmount = this.progress = clamp(0, (Math.abs(scrollTop) - 30) / MAX_PULL, 1);
        const currentTickToShow = clamp(0, Math.floor(pullAmount * NUM_TICKS), NUM_TICKS - 1);
        const shouldShowRefreshingSpinner = this.state === 8 /* RefresherState.Refreshing */ || currentTickToShow === NUM_TICKS - 1;
        if (shouldShowRefreshingSpinner) {
          if (this.pointerDown) {
            handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
          }
          if (!this.didRefresh) {
            this.beginRefresh();
            this.didRefresh = true;
            hapticImpact({ style: 'light' });
            /**
             * Translate the content element otherwise when pointer is removed
             * from screen the scroll content will bounce back over the refresher
             */
            if (!this.pointerDown) {
              translateElement(this.elementToTransform, `${refresherHeight}px`);
            }
          }
        }
        else {
          this.state = 2 /* RefresherState.Pulling */;
          handleScrollWhilePulling(pullingSpinner, ticks, opacity, currentTickToShow);
        }
      });
    };
    this.scrollEl.addEventListener('scroll', this.scrollListenerCallback);
    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.scrollEl,
      gestureName: 'refresher',
      gesturePriority: 31,
      direction: 'y',
      threshold: 5,
      onStart: () => {
        this.pointerDown = true;
        if (!this.didRefresh) {
          translateElement(this.elementToTransform, '0px');
        }
        /**
         * If the content had `display: none` when
         * the refresher was initialized, its clientHeight
         * will be 0. When the gesture starts, the content
         * will be visible, so try to get the correct
         * client height again. This is most common when
         * using the refresher in an ion-menu.
         */
        if (MAX_PULL === 0) {
          MAX_PULL = this.scrollEl.clientHeight * 0.16;
        }
      },
      onMove: ev => {
        this.lastVelocityY = ev.velocityY;
      },
      onEnd: () => {
        this.pointerDown = false;
        this.didStart = false;
        if (this.needsCompletion) {
          this.resetNativeRefresher(this.elementToTransform, 32 /* RefresherState.Completing */);
          this.needsCompletion = false;
        }
        else if (this.didRefresh) {
          readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
        }
      },
    });
    this.disabledChanged();
  }
  async setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    const circle = getElementRoot(pullingSpinner).querySelector('circle');
    const pullingRefresherIcon = this.el.querySelector('ion-refresher-content .refresher-pulling-icon');
    const refreshingCircle = getElementRoot(refreshingSpinner).querySelector('circle');
    if (circle !== null && refreshingCircle !== null) {
      writeTask(() => {
        circle.style.setProperty('animation', 'none');
        // This lines up the animation on the refreshing spinner with the pulling spinner
        refreshingSpinner.style.setProperty('animation-delay', '-655ms');
        refreshingCircle.style.setProperty('animation-delay', '-655ms');
      });
    }
    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.scrollEl,
      gestureName: 'refresher',
      gesturePriority: 31,
      direction: 'y',
      threshold: 5,
      canStart: () => this.state !== 8 /* RefresherState.Refreshing */ && this.state !== 32 /* RefresherState.Completing */ && this.scrollEl.scrollTop === 0,
      onStart: (ev) => {
        ev.data = { animation: undefined, didStart: false, cancelled: false };
        this.state = 2 /* RefresherState.Pulling */;
      },
      onMove: (ev) => {
        if ((ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart) || ev.data.cancelled) {
          ev.data.cancelled = true;
          return;
        }
        if (!ev.data.didStart) {
          ev.data.didStart = true;
          writeTask(() => this.scrollEl.style.setProperty('--overflow', 'hidden'));
          const animationType = getRefresherAnimationType(contentEl);
          const animation = createPullingAnimation(animationType, pullingRefresherIcon);
          ev.data.animation = animation;
          animation.progressStart(false, 0);
          this.ionStart.emit();
          this.animations.push(animation);
          return;
        }
        // Since we are using an easing curve, slow the gesture tracking down a bit
        this.progress = clamp(0, (ev.deltaY / 180) * 0.5, 1);
        ev.data.animation.progressStep(this.progress);
        this.ionPull.emit();
      },
      onEnd: (ev) => {
        if (!ev.data.didStart) {
          return;
        }
        writeTask(() => this.scrollEl.style.removeProperty('--overflow'));
        if (this.progress <= 0.4) {
          this.gesture.enable(false);
          ev.data.animation
            .progressEnd(0, this.progress, 500)
            .onFinish(() => {
            this.animations.forEach(ani => ani.destroy());
            this.animations = [];
            this.gesture.enable(true);
            this.state = 1 /* RefresherState.Inactive */;
          });
          return;
        }
        const progress = getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
        const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
        this.animations.push(snapBackAnimation);
        writeTask(async () => {
          pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', `${(progress * 100)}px`);
          ev.data.animation.progressEnd();
          await snapBackAnimation.play();
          this.beginRefresh();
          ev.data.animation.destroy();
        });
      }
    });
    this.disabledChanged();
  }
  async setupNativeRefresher(contentEl) {
    if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
      return;
    }
    /**
     * If using non-native refresher before make sure
     * we clean up any old CSS. This can happen when
     * a user manually calls the refresh method in a
     * component create callback before the native
     * refresher is setup.
     */
    this.setCss(0, '', false, '');
    this.nativeRefresher = true;
    const pullingSpinner = this.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
    const refreshingSpinner = this.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
    if (getIonMode(this) === 'ios') {
      this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
    }
    else {
      this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
    }
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  async connectedCallback() {
    if (this.el.getAttribute('slot') !== 'fixed') {
      console.error('Make sure you use: <ion-refresher slot="fixed">');
      return;
    }
    const contentEl = this.el.closest('ion-content');
    if (!contentEl) {
      console.error('<ion-refresher> must be used inside an <ion-content>');
      return;
    }
    await new Promise(resolve => componentOnReady(contentEl, resolve));
    this.scrollEl = await contentEl.getScrollElement();
    this.backgroundContentEl = getElementRoot(contentEl).querySelector('#background-content');
    if (await shouldUseNativeRefresher(this.el, getIonMode(this))) {
      this.setupNativeRefresher(contentEl);
    }
    else {
      this.gesture = (await import('../../utils/gesture')).createGesture({
        el: contentEl,
        gestureName: 'refresher',
        gesturePriority: 31,
        direction: 'y',
        threshold: 20,
        passive: false,
        canStart: () => this.canStart(),
        onStart: () => this.onStart(),
        onMove: ev => this.onMove(ev),
        onEnd: () => this.onEnd(),
      });
      this.disabledChanged();
    }
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = undefined;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  async complete() {
    if (this.nativeRefresher) {
      this.needsCompletion = true;
      // Do not reset scroll el until user removes pointer from screen
      if (!this.pointerDown) {
        raf(() => raf(() => this.resetNativeRefresher(this.elementToTransform, 32 /* RefresherState.Completing */)));
      }
    }
    else {
      this.close(32 /* RefresherState.Completing */, '120ms');
    }
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  async cancel() {
    if (this.nativeRefresher) {
      // Do not reset scroll el until user removes pointer from screen
      if (!this.pointerDown) {
        raf(() => raf(() => this.resetNativeRefresher(this.elementToTransform, 16 /* RefresherState.Cancelling */)));
      }
    }
    else {
      this.close(16 /* RefresherState.Cancelling */, '');
    }
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1 /* RefresherState.Inactive */) {
      return false;
    }
    // if the scrollTop is greater than zero then it's
    // not possible to pull the content down yet
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1 /* RefresherState.Inactive */;
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    // this method can get called like a bazillion times per second,
    // so it's built to be as efficient as possible, and does its
    // best to do any DOM read/writes only when absolutely necessary
    // if multi-touch then get out immediately
    const ev = detail.event;
    if (ev.touches && ev.touches.length > 1) {
      return;
    }
    // do nothing if it's actively refreshing
    // or it's in the way of closing
    // or this was never a startY
    if ((this.state & 56 /* RefresherState._BUSY_ */) !== 0) {
      return;
    }
    const pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    // don't bother if they're scrolling up
    // and have not already started dragging
    if (deltaY <= 0) {
      // the current Y is higher than the starting Y
      // so they scrolled up enough to be ignored
      this.progress = 0;
      this.state = 1 /* RefresherState.Inactive */;
      if (this.appliedStyles) {
        // reset the styles only if they were applied
        this.setCss(0, '', false, '');
        return;
      }
      return;
    }
    if (this.state === 1 /* RefresherState.Inactive */) {
      // this refresh is not already actively pulling down
      // get the content's scrollTop
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      // if the scrollTop is greater than zero then it's
      // not possible to pull the content down yet
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      // content scrolled all the way to the top, and dragging down
      this.state = 2 /* RefresherState.Pulling */;
    }
    // prevent native scroll events
    if (ev.cancelable) {
      ev.preventDefault();
    }
    // the refresher is actively pulling at this point
    // move the scroll element within the content element
    this.setCss(deltaY, '0ms', true, '');
    if (deltaY === 0) {
      // don't continue if there's no delta yet
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    // set pull progress
    this.progress = deltaY / pullMin;
    // emit "start" if it hasn't started yet
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    // emit "pulling" on every move
    this.ionPull.emit();
    // do nothing if the delta is less than the pull threshold
    if (deltaY < pullMin) {
      // ensure it stays in the pulling state, cuz its not ready yet
      this.state = 2 /* RefresherState.Pulling */;
      return;
    }
    if (deltaY > this.pullMax) {
      // they pulled farther than the max, so kick off the refresh
      this.beginRefresh();
      return;
    }
    // pulled farther than the pull min!!
    // it is now in the `ready` state!!
    // if they let go then it'll refresh, kerpow!!
    this.state = 4 /* RefresherState.Ready */;
    return;
  }
  onEnd() {
    // only run in a zone when absolutely necessary
    if (this.state === 4 /* RefresherState.Ready */) {
      // they pulled down far enough, so it's ready to refresh
      this.beginRefresh();
    }
    else if (this.state === 2 /* RefresherState.Pulling */) {
      // they were pulling down, but didn't pull down far enough
      // set the content back to it's original location
      // and close the refresher
      // set that the refresh is actively cancelling
      this.cancel();
    }
  }
  beginRefresh() {
    // assumes we're already back in a zone
    // they pulled down far enough, so it's ready to refresh
    this.state = 8 /* RefresherState.Refreshing */;
    // place the content in a hangout position while it thinks
    this.setCss(this.pullMin, this.snapbackDuration, true, '');
    // emit "refresh" because it was pulled down far enough
    // and they let go to begin refreshing
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    // create fallback timer incase something goes wrong with transitionEnd event
    setTimeout(() => {
      this.state = 1 /* RefresherState.Inactive */;
      this.progress = 0;
      this.didStart = false;
      this.setCss(0, '0ms', false, '');
    }, 600);
    // reset set the styles on the scroll element
    // set that the refresh is actively cancelling/completing
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
    // TODO: stop gesture
  }
  setCss(y, duration, overflowVisible, delay) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = (y > 0);
    writeTask(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = ((y > 0) ? `translateY(${y}px) translateZ(0px)` : '');
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = (overflowVisible ? 'hidden' : '');
      }
    });
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { slot: "fixed", class: {
        [mode]: true,
        // Used internally for styling
        [`refresher-${mode}`]: true,
        'refresher-native': this.nativeRefresher,
        'refresher-active': this.state !== 1 /* RefresherState.Inactive */,
        'refresher-pulling': this.state === 2 /* RefresherState.Pulling */,
        'refresher-ready': this.state === 4 /* RefresherState.Ready */,
        'refresher-refreshing': this.state === 8 /* RefresherState.Refreshing */,
        'refresher-cancelling': this.state === 16 /* RefresherState.Cancelling */,
        'refresher-completing': this.state === 32 /* RefresherState.Completing */,
      } }));
  }
  static get is() { return "ion-refresher"; }
  static get originalStyleUrls() {
    return {
      "ios": ["refresher.ios.scss"],
      "md": ["refresher.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["refresher.ios.css"],
      "md": ["refresher.md.css"]
    };
  }
  static get properties() {
    return {
      "pullMin": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The minimum distance the user must pull down until the\r\nrefresher will go into the `refreshing` state.\r\nDoes not apply when the refresher content uses a spinner,\r\nenabling the native refresher."
        },
        "attribute": "pull-min",
        "reflect": false,
        "defaultValue": "60"
      },
      "pullMax": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The maximum distance of the pull until the refresher\r\nwill automatically go into the `refreshing` state.\r\nDefaults to the result of `pullMin + 60`.\r\nDoes not apply when  the refresher content uses a spinner,\r\nenabling the native refresher."
        },
        "attribute": "pull-max",
        "reflect": false,
        "defaultValue": "this.pullMin + 60"
      },
      "closeDuration": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Time it takes to close the refresher.\r\nDoes not apply when the refresher content uses a spinner,\r\nenabling the native refresher."
        },
        "attribute": "close-duration",
        "reflect": false,
        "defaultValue": "'280ms'"
      },
      "snapbackDuration": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Time it takes the refresher to to snap back to the `refreshing` state.\r\nDoes not apply when the refresher content uses a spinner,\r\nenabling the native refresher."
        },
        "attribute": "snapback-duration",
        "reflect": false,
        "defaultValue": "'280ms'"
      },
      "pullFactor": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "How much to multiply the pull speed by. To slow the pull animation down,\r\npass a number less than `1`. To speed up the pull, pass a number greater\r\nthan `1`. The default value is `1` which is equal to the speed of the cursor.\r\nIf a negative value is passed in, the factor will be `1` instead.\r\n\r\nFor example: If the value passed is `1.2` and the content is dragged by\r\n`10` pixels, instead of `10` pixels the content will be pulled by `12` pixels\r\n(an increase of 20 percent). If the value passed is `0.8`, the dragged amount\r\nwill be `8` pixels, less than the amount the cursor has moved.\r\n\r\nDoes not apply when the refresher content uses a spinner,\r\nenabling the native refresher."
        },
        "attribute": "pull-factor",
        "reflect": false,
        "defaultValue": "1"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the refresher will be hidden."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "nativeRefresher": {},
      "state": {}
    };
  }
  static get events() {
    return [{
        "method": "ionRefresh",
        "name": "ionRefresh",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the user lets go of the content and has pulled down\r\nfurther than the `pullMin` or pulls the content down and exceeds the pullMax.\r\nUpdates the refresher state to `refreshing`. The `complete()` method should be\r\ncalled when the async operation has completed."
        },
        "complexType": {
          "original": "RefresherEventDetail",
          "resolved": "RefresherEventDetail",
          "references": {
            "RefresherEventDetail": {
              "location": "import",
              "path": "../../interface"
            }
          }
        }
      }, {
        "method": "ionPull",
        "name": "ionPull",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted while the user is pulling down the content and exposing the refresher."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionStart",
        "name": "ionStart",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the user begins to start pulling down."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "complete": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Call `complete()` when your async operation has completed.\r\nFor example, the `refreshing` state is while the app is performing\r\nan asynchronous operation, such as receiving more data from an\r\nAJAX request. Once the data has been received, you then call this\r\nmethod to signify that the refreshing has completed and to close\r\nthe refresher. This method also changes the refresher's state from\r\n`refreshing` to `completing`.",
          "tags": []
        }
      },
      "cancel": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Changes the refresher's state from `refreshing` to `cancelling`.",
          "tags": []
        }
      },
      "getProgress": {
        "complexType": {
          "signature": "() => Promise<number>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<number>"
        },
        "docs": {
          "text": "A number representing how far down the user has pulled.\r\nThe number `0` represents the user hasn't pulled down at all. The\r\nnumber `1`, and anything greater than `1`, represents that the user\r\nhas pulled far enough down that when they let go then the refresh will\r\nhappen. If they let go and the number is less than `1`, then the\r\nrefresh will not happen, and the content will return to it's original\r\nposition.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "disabledChanged"
      }];
  }
}
