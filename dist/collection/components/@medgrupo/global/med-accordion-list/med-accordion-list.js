import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { createAnimation } from '../../../../utils/animation/animation';
import { generateMedColor } from '../../../../utils/med-theme';
/**
  * @slot -
  */
export class Accordion {
  constructor() {
    /**
      * Define a variação da borda do componente.
      */
    this.singleOpen = true;
    /**
      * Define a variação da borda do componente.
      */
    this.noBorder = false;
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
    const openAnimationTime = 300;
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
    const closeAnimationTime = 300;
    return createAnimation()
      .addElement(elements)
      .afterStyles({ transform: 'none' })
      .to('transform', `translateY(-${amountToShift}px)`)
      .duration(closeAnimationTime)
      .easing('cubic-bezier(0.32,0.72,0,1)');
    ;
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
      }) },
      h("slot", null),
      h("div", { class: "med-accordion-list__blocker", ref: (el) => this.blocker = el })));
  }
  static get is() { return "med-accordion-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-accordion-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-accordion-list.css"]
  }; }
  static get properties() { return {
    "margin": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xs' | 'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a margin entre os itens do accordion."
      },
      "attribute": "margin",
      "reflect": false
    },
    "singleOpen": {
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
        "text": "Define a varia\u00E7\u00E3o da borda do componente."
      },
      "attribute": "single-open",
      "reflect": true,
      "defaultValue": "true"
    },
    "noBorder": {
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
        "text": "Define a varia\u00E7\u00E3o da borda do componente."
      },
      "attribute": "no-border",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "toggle",
      "method": "handleToggle",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
