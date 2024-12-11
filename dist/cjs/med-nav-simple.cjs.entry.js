/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medNavSimpleCss = ".sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-brand-2));--padding:24px 0;display:block;overflow:auto;overflow:auto;height:100vh}.med-nav-simple__wrapper.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:80px;min-height:100vh;background:hsl(var(--med-color-neutral-1));padding:var(--padding)}.med-nav-simple__logo.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon-wrapper.sc-med-nav-simple{border-radius:50%;width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon.sc-med-nav-simple{stroke:hsl(var(--med-color-neutral-10))}.med-nav-simple__item.sc-med-nav-simple{width:40px;margin-bottom:16px;--margin-left-text:0}.med-color.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-2))}.med-color-neutral.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-feedback))}";

const MedNavSimple = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.close = index.createEvent(this, "close", 7);
    this.dsColor = undefined;
  }
  clickHandle() {
    this.close.emit();
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-nav-simple': true,
      }) }, index.h("nav", { class: "med-nav-simple__wrapper" }, index.h("div", { class: "med-nav-simple__logo" }, index.h("div", { class: "med-nav-simple__icon-wrapper" }, index.h("ion-icon", { class: "med-nav-simple__icon med-icon med-icon--sm", name: "med-logo" }))), index.h("slot", null), index.h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })))));
  }
};
MedNavSimple.style = medNavSimpleCss;

exports.med_nav_simple = MedNavSimple;
