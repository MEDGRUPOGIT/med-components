/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medNavCss = ".sc-med-nav-h{--logo-background:hsl(var(--med-color-brand-2))}.sc-med-nav-h{position:relative;display:block}.med-nav__container.sc-med-nav{padding:24px;padding-top:calc(24px + var(--ion-safe-area-top, 0));padding-bottom:calc(24px + var(--ion-safe-area-bottom));background:hsl(var(--med-color-neutral-1));width:240px;height:100vh;overflow:auto;-webkit-transition:300ms all ease;transition:300ms all ease}.med-nav__logo.sc-med-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.med-nav__icon-wrapper.sc-med-nav{border-radius:50%;min-width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-right:16px}.med-nav__icon.sc-med-nav{stroke:hsl(var(--med-color-neutral-10))}.med-nav__toggle.sc-med-nav{position:absolute;bottom:24px;right:24px}.sc-med-nav-s>med-nav-item{margin-bottom:8px}.med-color.sc-med-nav-h{--logo-background:hsl(var(--med-color-2))}.med-color-neutral.sc-med-nav-h{--logo-background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-nav-h{--logo-background:hsl(var(--med-color-feedback))}.med-nav-simple.sc-med-nav{position:absolute;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:300ms all ease;transition:300ms all ease}.med-nav--active.sc-med-nav-h .med-nav__container.sc-med-nav{-webkit-transform:translateX(-100%);transform:translateX(-100%);position:absolute}.med-nav--active.sc-med-nav-h .med-nav-simple.sc-med-nav{-webkit-transform:translateX(0);transform:translateX(0);position:relative;-webkit-transition-delay:300ms;transition-delay:300ms}";

const MedNav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clicked = index.createEvent(this, "clicked", 7);
    this.titulo = 'MEDSoft';
    this.dsColor = undefined;
    this.active = false;
  }
  async watchClick() {
    this.active = !this.active;
  }
  clickHandle() {
    this.active = !this.active;
    this.clicked.emit(this.active);
  }
  render() {
    const { dsColor, active } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-nav': true,
        'med-nav--active': active
      }) }, index.h("nav", { class: "med-nav__container" }, index.h("div", { class: "med-nav__logo" }, index.h("div", { class: "med-nav__icon-wrapper" }, index.h("ion-icon", { class: "med-nav__icon med-icon med-icon--sm", name: "med-logo" })), index.h("med-type", { token: "h24", "ds-color": "neutral-10" }, this.titulo)), index.h("slot", null), index.h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" }))), index.h("med-nav-simple", { "ds-color": dsColor })));
  }
};
MedNav.style = medNavCss;

exports.med_nav = MedNav;
