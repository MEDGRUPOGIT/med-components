'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');
const animation = require('./animation-550bbf23.js');
require('./helpers-ba3c117b.js');

const medAccordionItemCss = ":host{--background-header:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));--background-content:hsl(var(--med-color-neutral-2));--icon-color:hsl(var(--med-color-neutral-10));--border-radius:8px;--padding:16px;--icon-font-size:24px;--align-items:initial}:host(.med-accordion-item){display:block;border-radius:var(--border-radius)}:host(.med-accordion-item) .med-accordion-item__header-container{width:100%;cursor:pointer;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:var(--align-items);align-items:var(--align-items)}:host(.med-accordion-item) .med-accordion-item__header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--padding);background:var(--background-header);border-radius:var(--border-radius);position:relative;width:100%;-webkit-transition:background 0.5s linear;transition:background 0.5s linear;background-size:200% 100%;background-position:100% 0}:host(.med-accordion-item) .med-accordion-item__heading{width:100%}:host(.med-accordion-item) .med-accordion-item__icon-container{display:-ms-flexbox;display:flex}:host(.med-accordion-item) .med-accordion-item__icon-container--left{padding-right:8px}:host(.med-accordion-item) .med-accordion-item__icon-container--right{padding-left:8px;margin-left:auto}:host(.med-accordion-item) .med-accordion-item__content{display:none;background:var(--background-content);border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);z-index:0}:host(.med-accordion-item) .header-container__end{margin-left:auto}:host(.med-accordion-item) .header-container__middle{width:var(--middle-width)}:host(.med-accordion-item--no-border){--border-radius:0}:host(.med-accordion-item--keep-border) .med-accordion-item__header{border-bottom-left-radius:8px !important;border-bottom-right-radius:8px !important}::slotted(ion-progress-bar){position:absolute;left:0;bottom:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}:host(.med-accordion-item--open.med-accordion-item--background) .med-accordion-item__header{background-position:0 0}:host(.med-accordion-item--open) ::slotted(ion-progress-bar){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.med-color.med-accordion-item--background){--background-header:linear-gradient(to right, hsl(var(--med-color-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)))}";

const MedAccordionItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = index.createEvent(this, "toggle", 7);
    this.opened = index.createEvent(this, "opened", 7);
    this.medClick = index.createEvent(this, "medClick", 7);
    /**
     * todo
     */
    this.noBorder = false;
    /**
     * todo
     */
    this.background = false;
    /**
     * todo
     */
    this.canCollapse = true;
    /**
     * todo
     */
    this.isOpened = false;
    /**
     * todo
     */
    this.slotsToggle = [];
    /**
     * todo
     */
    this.isOpen = false;
    this.isTransitioning = false;
    this.onClick = (slot) => {
      if (!this.canCollapse) {
        return;
      }
      if (!this.slotsToggle.length || this.slotsToggle.indexOf(slot) >= 0) {
        this.toggleOpen();
      }
    };
  }
  watchPropHandler(newValue) {
    this.toggleOpen();
  }
  componentDidLoad() {
    if (this.isOpened) {
      this.toggleOpen();
    }
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      header: this.header,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
        this.opened.emit(this.isOpen);
      },
    });
  }
  onHeaderClick() {
    this.medClick.emit();
  }
  render() {
    const { dsColor, noBorder, isOpen, background } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        'med-accordion-item--open': isOpen,
        'med-accordion-item--background': background,
      }) }, index.h("div", { class: "med-accordion-item__header", onClick: () => this.onHeaderClick(), ref: (el) => this.header = el }, index.h("div", { class: "med-accordion-item__header-container" }, index.h("div", { class: "header-container__start", onClick: () => this.onClick('start') }, index.h("slot", { name: "start" })), index.h("div", { class: "header-container__middle", onClick: () => this.onClick('middle') }, index.h("slot", { name: "middle" })), index.h("div", { class: "header-container__end", onClick: () => this.onClick('end') }, index.h("slot", { name: "end" }))), index.h("div", null, index.h("slot", { name: "auxiliar" })), index.h("div", { onClick: () => this.onClick('middle') }, index.h("slot", { name: "full-header" }))), index.h("div", { class: "med-accordion-item__content", ref: (el) => this.content = el }, index.h("slot", { name: "content" }))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "isOpened": ["watchPropHandler"]
  }; }
};
MedAccordionItem.style = medAccordionItemCss;

const medAccordionListCss = ":host{--background:hsl(var(--med-color-neutral-1));--border:8px solid hsl(var(--med-color-neutral-1));--border-radius:8px}:host(.med-accordion-list){display:block}:host(.med-accordion-list) .med-accordion-list__blocker{background-color:var(--background);will-change:transform;border-radius:var(--border-radius)}:host(.med-accordion-list) ::slotted(med-accordion-item){border-bottom:var(--border)}:host(.med-accordion-list) ::slotted(med-accordion-item:last-child){border-bottom:none !important}:host(.med-accordion-list--xs) ::slotted(med-accordion-item){--border:4px solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--sm) ::slotted(med-accordion-item){--border:8px solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--md) ::slotted(med-accordion-item){--border:16px solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--lg) ::slotted(med-accordion-item){--border:24px solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--no-border) .med-accordion-list__blocker{--border-radius:0}";

const Accordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * todo
     */
    this.singleOpen = true;
    /**
     * todo
     */
    this.noBorder = false;
    /**
     * todo
     */
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
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(null, {
        'med-accordion-list': true,
        'med-accordion-list--no-border': noBorder,
        [`med-accordion-list--${margin}`]: margin !== undefined
      }) }, index.h("slot", null), index.h("div", { class: "med-accordion-list__blocker", ref: (el) => this.blocker = el })));
  }
  get hostElement() { return index.getElement(this); }
};
Accordion.style = medAccordionListCss;

exports.med_accordion_item = MedAccordionItem;
exports.med_accordion_list = Accordion;
