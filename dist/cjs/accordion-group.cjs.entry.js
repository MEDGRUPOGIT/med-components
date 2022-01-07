'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const animation = require('./animation-13cbbb20.js');
require('./helpers-d381ec4d.js');

const accordionGroupCss = ":host{--margin:10px;--background-page:hsl(var(--med-color-neutral-1))}:host{display:block}";

const AccordionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * TODO.
      */
    this.singleOpen = true;
    /**
      * TODO.
      */
    this.noAnimation = false;
    this.currentlyOpen = null;
    // public blockerDownAnimation!: Animation;
    this.openAnimationTime = this.noAnimation ? 0 : 300;
    this.closeAnimationTime = this.noAnimation ? 0 : 300;
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
    if (this.singleOpen) {
      await this.closeOpenItem();
    }
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
    this.shiftDownAnimation = animation.createAnimation()
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
    this.contentDownAnimation = animation.createAnimation()
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
    const shiftUpAnimation = animation.createAnimation()
      .addElement(this.itemsToShift)
      .afterStyles({
      ['transform']: 'translateY(0)',
    })
      .to('transform', `translateY(-${amountToShift}px)`)
      .duration(this.closeAnimationTime)
      .easing('linear');
    const contentUpAnimation = animation.createAnimation()
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
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
AccordionGroup.style = accordionGroupCss;

exports.accordion_group = AccordionGroup;
