'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medNavSimpleCss = ".sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-brand-2));display:block;overflow:auto;padding-top:calc(24px + var(--ion-safe-area-top, 0));padding-bottom:calc(24px + var(--ion-safe-area-bottom));overflow:auto;height:calc(100vh - calc(24px + var(--ion-safe-area-top, 0)) - calc(24px + var(--ion-safe-area-bottom)))}.med-nav-simple__wrapper.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:80px;min-height:100vh;background:hsl(var(--med-color-neutral-1))}.med-nav-simple__logo.sc-med-nav-simple{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon-wrapper.sc-med-nav-simple{border-radius:50%;width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.med-nav-simple__icon.sc-med-nav-simple{stroke:hsl(var(--med-color-neutral-10))}.med-nav-simple__item.sc-med-nav-simple{width:40px;margin-bottom:16px;--margin-left-text:0}.med-color.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-2))}.med-color-neutral.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-nav-simple-h{--logo-background:hsl(var(--med-color-feedback))}";

const MedNavSimple = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.close = index.createEvent(this, "close", 7);
  }
  clickHandle() {
    this.close.emit();
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-nav-simple': true,
      }) }, index.h("nav", { class: "med-nav-simple__wrapper" }, index.h("div", { class: "med-nav-simple__logo" }, index.h("div", { class: "med-nav-simple__icon-wrapper" }, index.h("ion-icon", { class: "med-nav-simple__icon med-icon med-icon--sm", name: "med-logo" }))), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-play", active: true }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-apostila" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-concursos" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-orientacao" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-metricas" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-qrcode" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-slidedeaula" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-duvidasacademicas" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-cronograma" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-bonus" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-drogas" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-anotacao" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-multimidia" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-concursos" }), index.h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-montaprovas" }), index.h("ion-button", { mode: "ios", "icon-only": true, "ds-color": dsColor, class: "med-nav__toggle", fill: "clear", onClick: () => this.clickHandle() }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })))));
  }
};
MedNavSimple.style = medNavSimpleCss;

exports.med_nav_simple = MedNavSimple;
