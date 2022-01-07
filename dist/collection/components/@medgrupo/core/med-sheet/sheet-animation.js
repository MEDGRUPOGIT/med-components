import { createAnimation } from '../../../../utils/animation/animation';
const MODAL_ANIMATION_DURATION = 500;
const MODAL_ANIMATION_DURATION_OPACITY = 100;
export function modalEnterAnimationSheetMobile(baseEl) {
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .easing('ease-in-out')
    .duration(MODAL_ANIMATION_DURATION)
    .fromTo('opacity', '0.01', '1')
    .keyframes([
    { offset: 0, transform: 'translateY(800px)' },
    { offset: 1, transform: 'translateY(0)' }
  ]);
  return createAnimation()
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);
}
export function modalEnterAnimationSheetDesktop(baseEl) {
  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop'))
    .duration(MODAL_ANIMATION_DURATION_OPACITY)
    .fromTo('opacity', '0.01', '0.65');
  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelector('.modal-wrapper'))
    .easing('ease-in-out')
    .duration(MODAL_ANIMATION_DURATION)
    .keyframes([
    { offset: 0, transform: 'translateX(400px)' },
    { offset: 1, transform: 'translateX(0)' }
  ]);
  return createAnimation()
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);
}
export function modalLeaveAnimationSheetMobile(baseEl) {
  return modalEnterAnimationSheetMobile(baseEl).direction('reverse');
}
export function modalLeaveAnimationSheetDesktop(baseEl) {
  return modalEnterAnimationSheetDesktop(baseEl).direction('reverse');
}
