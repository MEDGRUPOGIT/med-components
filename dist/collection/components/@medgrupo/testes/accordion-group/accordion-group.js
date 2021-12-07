import { Component, h, Host, Listen, Element } from '@stencil/core';
import { createAnimation } from '../../../../utils/animation/animation';
export class AccordionGroup {
  constructor() {
    this.currentlyOpen = null;
    // public blockerDownAnimation!: Animation;
    this.openAnimationTime = 300;
    this.closeAnimationTime = 300;
  }
  async handleToggle(event) {
    event.detail.shouldOpen ? await this.animateOpen(event) : await this.animateClose(event);
    event.detail.endTransition();
  }
  async closeOpenItem() {
    if (this.currentlyOpen !== null) {
      const itemToClose = this.currentlyOpen.detail;
      itemToClose.startTransition();
      await this.animateClose(this.currentlyOpen);
      itemToClose.endTransition();
      itemToClose.setClosed();
      return true;
    }
  }
  async animateOpen(event) {
    //const element = event.detail.element;
    const contentElement = event.detail.content;
    // fecha qualquer item aberto
    await this.closeOpenItem();
    this.currentlyOpen = event;
    // cria um array com todos itens do accordion
    const items = Array.from(this.hostElement.children);
    // acha o item que está sendo aberto, e cria um novo array com todos itens abaixo dele
    let splitOnIndex = 0;
    items.forEach((item, index) => {
      if (item === event.detail.element) {
        splitOnIndex = index;
      }
    });
    this.itemsToShift = [...items].splice(splitOnIndex + 1, items.length - (splitOnIndex + 1));
    // define o conteudo do item visível
    contentElement.style.display = 'block';
    // calcula o quanto que os outros itens devem ser movidos
    const amountToShift = contentElement.clientHeight;
    // estado inicial dos elementos
    contentElement.style.translateY = `-${amountToShift}px`;
    // Initially set all items below the one being opened to cover the new content
    // but then animate back to their normal position to reveal the content
    this.shiftDownAnimation = createAnimation()
      .addElement(this.itemsToShift)
      .delay(20)
      .beforeStyles({
      ['transform']: `translateY(-${amountToShift}px)`,
      ['position']: 'relative',
      ['z-index']: '1',
    })
      .afterClearStyles(['position', 'z-index'])
      .to('transform', 'translateY(0)')
      .duration(this.openAnimationTime)
      .easing('linear');
    this.contentDownAnimation = createAnimation()
      .addElement(contentElement)
      .delay(20)
      .beforeStyles({
      ['transform']: `translateY(-${amountToShift}px)`,
      ['height']: `${amountToShift}px`,
    })
      .to('transform', 'translateY(0)')
      .duration(this.openAnimationTime)
      .easing('linear');
    /* this.blockerDownAnimation = createAnimation()
      .addElement(this.blockerElement)
      .delay(20)
      .beforeStyles({
        ['transform']: `translateY(-${amountToShift}px)`,
        ['height']: `${amountToShift}px`,
      })
      .to('transform', 'translateY(0)')
      .duration(this.openAnimationTime)
      .easing('linear'); */
    return await Promise.all([this.shiftDownAnimation.play(), this.contentDownAnimation.play(), /* this.blockerDownAnimation.play() */]);
  }
  async animateClose(event) {
    const contentElement = event.detail.content;
    this.currentlyOpen = null;
    const amountToShift = contentElement.clientHeight;
    const shiftUpAnimation = createAnimation()
      .addElement(this.itemsToShift)
      .afterStyles({
      ['transform']: 'translateY(0)',
    })
      .to('transform', `translateY(-${amountToShift}px)`)
      .duration(this.closeAnimationTime)
      .easing('linear');
    const contentUpAnimation = createAnimation()
      .addElement(contentElement)
      .afterStyles({
      ['transform']: 'translateY(0)',
    })
      .to('transform', `translateY(-${amountToShift}px)`)
      .afterAddWrite(() => {
      this.shiftDownAnimation.destroy();
      this.contentDownAnimation.destroy();
      // this.blockerDownAnimation.destroy();
    })
      .duration(this.closeAnimationTime)
      .easing('linear');
    /* const blockerUpAnimation: Animation = createAnimation()
      .addElement(this.blockerElement)
      .afterStyles({
        ['transform']: 'translateY(0)',
      })
      .to('transform', `translateY(-${amountToShift}px)`)
      .duration(this.closeAnimationTime)
      .easing('linear'); */
    await Promise.all([shiftUpAnimation.play(), contentUpAnimation.play(), /* blockerUpAnimation.play() */]);
    // esconde o conteudo do item
    contentElement.style.display = 'none';
    // Destroy the animations to reset the CSS values that they applied. This will remove the transforms instantly.
    shiftUpAnimation.destroy();
    contentUpAnimation.destroy();
    // blockerUpAnimation.destroy();
    return true;
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "accordion-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["accordion-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["accordion-group.css"]
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
