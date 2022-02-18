'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medBannerCss = ":host{--background:hsl(var(--med-color-neutral-2));--padding-header:8px;--padding-content:16px 16px 0 16px;--padding-right:16px;--padding-footer:8px 8px 8px 8px;--height-footer:32px}:host{display:block;background-color:var(--background);-webkit-transition:background-color 300ms ease-out, color 300ms ease-out;transition:background-color 300ms ease-out, color 300ms ease-out}.med-notification__titulo{--font-size:16px;--line-height:16px;--font-weight:600;text-align:justify}.med-notification__texto{--font-size:14px;--line-height:20px;text-align:justify}.med-notification__icon{stroke:hsl(var(--med-color-neutral-10));margin-left:auto;-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}.med-notification__content{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--padding-content)}.med-notification__left{-ms-flex:1;flex:1}.med-notification__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-bottom:var(--padding-header)}.med-notification__right{padding-left:var(--padding-right)}.med-notification__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:var(--height-footer);padding:var(--padding-footer)}@media (min-width: 992px){:host{--padding-titulo:16px;--padding-content:24px 24px 0 24px;--padding-footer:8px 16px 8px 16px;--height-footer:40px}:host__titulo{--font-size:20px;--line-height:20px}:host__texto{--font-size:16px;--line-height:24px}}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color) .med-notification__titulo{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__texto{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__icon{stroke:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__button{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-neutral) .med-notification__titulo{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__texto{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__icon{stroke:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__button{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}:host(.med-color-feedback) .med-notification__titulo{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__texto{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__icon{stroke:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__button{--color:hsl(var(--med-color-feedback-contrast))}";

const MedBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.btnLeftClick = index.createEvent(this, "btnLeftClick", 7);
    this.btnRightClick = index.createEvent(this, "btnRightClick", 7);
    this.onButtonLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onButtonRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { dsColor, titulo, texto, btnLeft, btnRight, icon, image } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-notification': true,
      }) }, (titulo || texto) && index.h("div", { class: "med-notification__content" }, index.h("div", { class: "med-notification__left" }, index.h("div", { class: "med-notification__header" }, titulo && index.h("med-type", { class: "med-notification__titulo" }, " ", titulo, " "), icon && index.h("ion-icon", { class: "med-notification__icon med-icon", name: icon })), texto && index.h("med-type", { class: "med-notification__texto" }, " ", texto, " ")), image && index.h("div", { class: "med-notification__right" }, index.h("img", { class: "med-notification__image", src: image }))), (btnLeft || btnRight) && index.h("div", { class: "med-notification__footer" }, btnLeft && index.h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonLeftClick }, " ", btnLeft, " "), btnRight && index.h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonRightClick }, " ", btnRight, " "))));
  }
};
MedBanner.style = medBannerCss;

exports.med_banner = MedBanner;
