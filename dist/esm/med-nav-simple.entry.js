/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';

const medNavSimpleCss = ".sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-brand-2));--padding:24px 0;display:block;overflow:auto;overflow:auto;height:100vh}.med-nav-simple__wrapper.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:80px;min-height:100vh;background:hsl(var(--med-color-neutral-1));padding:var(--padding)}.med-nav-simple__logo.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon-wrapper.sc-med-nav-simple{border-radius:50%;width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon.sc-med-nav-simple{stroke:hsl(var(--med-color-neutral-10))}.med-nav-simple__item.sc-med-nav-simple{width:40px;margin-bottom:16px;--margin-left-text:0}.med-color.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-2))}.med-color-neutral.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-feedback))}";

const MedNavSimple = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.dsColor = undefined;
  }
  clickHandle() {
    this.close.emit();
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-simple': true,
      }) }, h("nav", { class: "med-nav-simple__wrapper" }, h("div", { class: "med-nav-simple__logo" }, h("div", { class: "med-nav-simple__icon-wrapper" }, h("ion-icon", { class: "med-nav-simple__icon med-icon med-icon--sm", name: "med-logo" }))), h("slot", null), h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })))));
  }
};
MedNavSimple.style = medNavSimpleCss;

export { MedNavSimple as med_nav_simple };
