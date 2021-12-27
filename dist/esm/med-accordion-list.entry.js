import { r as registerInstance, h, H as Host, i as getElement } from './index-70672e81.js';
import { c as createAnimation } from './animation-f0f182d7.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';
import './helpers-6b411283.js';

const medAccordionListCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:hsl(var(--med-color-neutral-1));--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1));--border-radius:var(--med-border-radius-sm)}:host(.med-accordion-list){display:block}:host(.med-accordion-list) .med-accordion-list__blocker{background-color:var(--background);will-change:transform;border-radius:var(--border-radius)}:host(.med-accordion-list) ::slotted(med-accordion-item){border-bottom:var(--border)}:host(.med-accordion-list) ::slotted(med-accordion-item:last-child){border-bottom:none !important}:host(.med-accordion-list--xs) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-nano) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--sm) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--md) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-base) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--lg) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--no-border) .med-accordion-list__blocker{--border-radius:0}";

const Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define a variação da borda do componente.
      */
    this.singleOpen = true;
    /**
      * Define a variação da borda do componente.
      */
    this.noBorder = false;
    this.noAnimation = false;
    this.currentlyOpen = null;
  }
  async handleToggle(ev) {
    ev.detail.shouldOpen ? await this.animateOpen(ev) : await this.animateClose(ev);
    ev.detail.endTransition();
  }
  async closeOpenItem() {
    if (this.currentlyOpen !== null) {
      const itemToClose = this.currentlyOpen.detail;
      itemToClose.startTransition();
      await this.animateClose(this.currentlyOpen);
      itemToClose.endTransition();
      itemToClose.setClosed();
    }
  }
  getElementsToShift(target) {
    // Create an array of all accordion items
    const items = Array.from(this.hostElement.children);
    // Find the item being opened, and create a new array with only the elements beneath the element being opened
    let splitOnIndex = 0;
    items.forEach((item, index) => {
      if (item === target) {
        splitOnIndex = index;
      }
    });
    return [...items].splice(splitOnIndex + 1, items.length - (splitOnIndex + 1));
  }
  createOpenAnimation(elements, amountToShift, isBlocker) {
    const openAnimationTime = this.noAnimation ? 0 : 300;
    const beforeStyles = {
      transform: `translateY(-${amountToShift}px)`,
      position: 'relative',
      'z-index': '1',
    };
    const afterStyles = { transform: `none`, 'z-index': null };
    if (isBlocker) {
      beforeStyles['height'] = `${amountToShift}px`;
      afterStyles['height'] = '0px';
    }
    let animation = createAnimation()
      .addElement(elements)
      .delay(20)
      .beforeStyles(beforeStyles)
      .afterClearStyles(['position', 'z-index'])
      .afterStyles(afterStyles)
      .to('transform', 'translateY(0)')
      .duration(openAnimationTime)
      .easing('cubic-bezier(0.32,0.72,0,1)');
    return animation;
  }
  async animateOpen(ev) {
    // Close any open item first
    if (this.singleOpen) {
      await this.closeOpenItem();
    }
    this.currentlyOpen = ev;
    const elementsToShift = this.getElementsToShift(ev.detail.element);
    // Set item content to be visible
    ev.detail.content.style.display = 'block';
    ev.detail.header.style.borderBottomLeftRadius = '0';
    ev.detail.header.style.borderBottomRightRadius = '0';
    const amountToShift = ev.detail.content.clientHeight;
    const shiftDownAnimation = this.createOpenAnimation(elementsToShift, amountToShift, false);
    const blockerDownAnimation = this.createOpenAnimation(this.blocker, amountToShift, true);
    await Promise.all([shiftDownAnimation.play(), blockerDownAnimation.play()]);
    shiftDownAnimation.destroy();
    blockerDownAnimation.destroy();
  }
  createCloseAnimation(elements, amountToShift) {
    const closeAnimationTime = this.noAnimation ? 0 : 300;
    return createAnimation()
      .addElement(elements)
      .afterStyles({ transform: 'none', zIndex: '0' })
      .to('transform', `translateY(-${amountToShift}px)`)
      .duration(closeAnimationTime)
      .easing('cubic-bezier(0.32,0.72,0,1)');
  }
  async animateClose(ev) {
    const elementsToShift = this.getElementsToShift(ev.detail.element);
    ev.detail.header.style = '';
    ev.detail.element.style.overflow = 'hidden';
    ev.detail.header.style.zIndex = '1';
    this.currentlyOpen = null;
    const amountToShift = ev.detail.content.clientHeight;
    // Now we first animate up the elements beneath the content that was opened to cover it
    // and then we set the content back to display: none and remove the transform completely
    // With the content gone, there will be no noticeable position change when removing the transform
    const shiftUpAnimation = this.createCloseAnimation(elementsToShift, amountToShift);
    const blockerUpAnimation = this.createCloseAnimation(this.blocker, amountToShift);
    const contentUpAnimation = this.createCloseAnimation(ev.detail.content, amountToShift);
    await Promise.all([shiftUpAnimation.play(), blockerUpAnimation.play(), contentUpAnimation.play()]);
    ev.detail.element.style.overflow = 'initial';
    ev.detail.header.style.zIndex = 'initial';
    ev.detail.content.style.display = 'none';
    shiftUpAnimation.destroy();
    blockerUpAnimation.destroy();
    contentUpAnimation.destroy();
  }
  render() {
    const { noBorder, margin } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-accordion-list': true,
        'med-accordion-list--no-border': noBorder,
        [`med-accordion-list--${margin}`]: margin !== undefined
      }) }, h("slot", null), h("div", { class: "med-accordion-list__blocker", ref: (el) => this.blocker = el })));
  }
  get hostElement() { return getElement(this); }
};
Accordion.style = medAccordionListCss;

export { Accordion as med_accordion_list };
