'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const animation = require('./animation-dadce649.js');
const medTheme = require('./med-theme-42add9fc.js');
require('./helpers-ab0db03b.js');

const medAccordionListCss = ":host{--background:hsl(var(--med-color-neutral-1));--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1));--border-radius:var(--med-border-radius-sm)}:host(.med-accordion-list){display:block}:host(.med-accordion-list) .med-accordion-list__blocker{background-color:var(--background);will-change:transform;border-radius:var(--border-radius)}:host(.med-accordion-list) ::slotted(med-accordion-item){border-bottom:var(--border)}:host(.med-accordion-list) ::slotted(med-accordion-item:last-child){border-bottom:none !important}:host(.med-accordion-list--xs) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-nano) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--sm) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--md) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-base) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--lg) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--no-border) .med-accordion-list__blocker{--border-radius:0}";

const Accordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    let animation$1 = animation.createAnimation()
      .addElement(elements)
      .delay(20)
      .beforeStyles(beforeStyles)
      .afterClearStyles(['position', 'z-index'])
      .afterStyles(afterStyles)
      .to('transform', 'translateY(0)')
      .duration(openAnimationTime)
      .easing('cubic-bezier(0.32,0.72,0,1)');
    return animation$1;
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
    return animation.createAnimation()
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
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(null, {
        'med-accordion-list': true,
        'med-accordion-list--no-border': noBorder,
        [`med-accordion-list--${margin}`]: margin !== undefined
      }) }, index.h("slot", null), index.h("div", { class: "med-accordion-list__blocker", ref: (el) => this.blocker = el })));
  }
  get hostElement() { return index.getElement(this); }
};
Accordion.style = medAccordionListCss;

exports.med_accordion_list = Accordion;
