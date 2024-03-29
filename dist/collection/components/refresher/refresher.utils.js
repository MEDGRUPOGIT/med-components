/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { writeTask } from '@stencil/core';
import { createAnimation } from '../../utils/animation/animation';
import { componentOnReady } from '../../utils/helpers';
import { isPlatform } from '../../utils/platform';
export const getRefresherAnimationType = (contentEl) => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
  return hasHeader ? 'translate' : 'scale';
};
export const createPullingAnimation = (type, pullingSpinner) => {
  return type === 'scale' ? createScaleAnimation(pullingSpinner) : createTranslateAnimation(pullingSpinner);
};
const createBaseAnimation = (pullingRefresherIcon) => {
  const spinner = pullingRefresherIcon.querySelector('ion-spinner');
  const circle = spinner.shadowRoot.querySelector('circle');
  const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
  const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
  const arrow = (arrowContainer) ? arrowContainer.querySelector('ion-icon') : null;
  const baseAnimation = createAnimation()
    .duration(1000)
    .easing('ease-out');
  const spinnerArrowContainerAnimation = createAnimation()
    .addElement(spinnerArrowContainer)
    .keyframes([
    { offset: 0, opacity: '0.3' },
    { offset: 0.45, opacity: '0.3' },
    { offset: 0.55, opacity: '1' },
    { offset: 1, opacity: '1' }
  ]);
  const circleInnerAnimation = createAnimation()
    .addElement(circle)
    .keyframes([
    { offset: 0, strokeDasharray: '1px, 200px' },
    { offset: 0.20, strokeDasharray: '1px, 200px' },
    { offset: 0.55, strokeDasharray: '100px, 200px' },
    { offset: 1, strokeDasharray: '100px, 200px' }
  ]);
  const circleOuterAnimation = createAnimation()
    .addElement(spinner)
    .keyframes([
    { offset: 0, transform: 'rotate(-90deg)' },
    { offset: 1, transform: 'rotate(210deg)' }
  ]);
  /**
   * Only add arrow animation if present
   * this allows users to customize the spinners
   * without errors being thrown
   */
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = createAnimation()
      .addElement(arrowContainer)
      .keyframes([
      { offset: 0, transform: 'rotate(0deg)' },
      { offset: 0.30, transform: 'rotate(0deg)' },
      { offset: 0.55, transform: 'rotate(280deg)' },
      { offset: 1, transform: 'rotate(400deg)' }
    ]);
    const arrowAnimation = createAnimation()
      .addElement(arrow)
      .keyframes([
      { offset: 0, transform: 'translateX(2px) scale(0)' },
      { offset: 0.30, transform: 'translateX(2px) scale(0)' },
      { offset: 0.55, transform: 'translateX(-1.5px) scale(1)' },
      { offset: 1, transform: 'translateX(-1.5px) scale(1)' }
    ]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
const createScaleAnimation = (pullingRefresherIcon) => {
  const height = pullingRefresherIcon.clientHeight;
  const spinnerAnimation = createAnimation()
    .addElement(pullingRefresherIcon)
    .keyframes([
    { offset: 0, transform: `scale(0) translateY(-${height + 20}px)` },
    { offset: 1, transform: 'scale(1) translateY(100px)' }
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createTranslateAnimation = (pullingRefresherIcon) => {
  const height = pullingRefresherIcon.clientHeight;
  const spinnerAnimation = createAnimation()
    .addElement(pullingRefresherIcon)
    .keyframes([
    { offset: 0, transform: `translateY(-${height + 20}px)` },
    { offset: 1, transform: 'translateY(100px)' }
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
export const createSnapBackAnimation = (pullingRefresherIcon) => {
  return createAnimation()
    .duration(125)
    .addElement(pullingRefresherIcon)
    .fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
};
// iOS Native Refresher
// -----------------------------
export const setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty('opacity', opacity.toString());
};
export const handleScrollWhilePulling = (spinner, ticks, opacity, currentTickToShow) => {
  writeTask(() => {
    setSpinnerOpacity(spinner, opacity);
    ticks.forEach((el, i) => el.style.setProperty('opacity', (i <= currentTickToShow) ? '0.99' : '0'));
  });
};
export const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  writeTask(() => {
    // If user pulls down quickly, the spinner should spin faster
    spinner.style.setProperty('--refreshing-rotation-duration', (lastVelocityY >= 1.0) ? '0.5s' : '2s');
    spinner.style.setProperty('opacity', '1');
  });
};
export const translateElement = (el, value) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = transitionEndAsync(el, 200);
  writeTask(() => {
    el.style.setProperty('transition', '0.2s all ease-out');
    if (value === undefined) {
      el.style.removeProperty('transform');
    }
    else {
      el.style.setProperty('transform', `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
// Utils
// -----------------------------
export const shouldUseNativeRefresher = async (referenceEl, mode) => {
  const refresherContent = referenceEl.querySelector('ion-refresher-content');
  if (!refresherContent) {
    return Promise.resolve(false);
  }
  await new Promise(resolve => componentOnReady(refresherContent, resolve));
  const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
  const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
  return (pullingSpinner !== null &&
    refreshingSpinner !== null &&
    ((mode === 'ios' && isPlatform('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined) ||
      mode === 'md'));
};
export const transitionEndAsync = (el, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};
const transitionEnd = (el, expectedDuration = 0, callback) => {
  let unRegTrans;
  let animationTimeout;
  const opts = { passive: true };
  const ANIMATION_FALLBACK_TIMEOUT = 500;
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = (ev) => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
    unRegTrans = () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }
      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }
  return unregister;
};
