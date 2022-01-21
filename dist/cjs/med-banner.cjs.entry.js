'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medBannerCss = ":host{--background:hsl(var(--med-color-neutral-2));--padding-content:16px 16px 0 16px;--padding-footer:8px 8px 8px 8px;--padding-texto:8px;--footer-height:32px;--padding-right:16px}:host{display:block;background-color:var(--background)}.med-notification__content{padding:var(--padding-content);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.med-notification__titulo{text-align:left;padding-right:var(--padding-right)}.med-notification__texto{text-align:left;padding-top:var(--padding-texto);padding-right:var(--padding-right)}.med-notification__footer{padding:var(--padding-footer);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:var(--footer-height)}:host(.med-notification--md){--padding-content:24px 24px 0 24px;--padding-footer:8px 16px;--footer-height:40px;--padding-right:32px}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color) .med-notification__titulo{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__texto{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__button{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-neutral) .med-notification__titulo{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__texto{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__button{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}:host(.med-color-feedback) .med-notification__titulo{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__texto{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__button{--color:hsl(var(--med-color-feedback-contrast))}";

const MedBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.btnLeftClick = index.createEvent(this, "btnLeftClick", 7);
    this.btnRightClick = index.createEvent(this, "btnRightClick", 7);
    /**
     * Define a variação de tamanho do componente.
     */
    this.dsSize = 'sm';
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { dsColor, dsSize, titulo, texto, btnLeft, btnRight } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-notification': true,
        [`med-notification--${dsSize}`]: dsSize !== undefined,
      }) }, (titulo || texto) && index.h("div", { class: "med-notification__content" }, index.h("div", { class: "med-notification__left" }, titulo && index.h("med-type", { class: "med-notification__titulo", token: dsSize === 'md' ? 'h20' : 'p16b' }, titulo), texto && index.h("med-type", { class: "med-notification__texto", token: dsSize === 'md' ? 'p16x' : 'p14x' }, texto)), index.h("div", { class: "med-notification__right" }, index.h("slot", { name: "imagem" }))), (btnLeft || btnRight) && index.h("div", { class: "med-notification__footer" }, btnLeft && index.h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", "ds-size": dsSize, onClick: this.onBtnLeftClick }, " ", btnLeft, " "), btnRight && index.h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", "ds-size": dsSize, onClick: this.onBtnRightClick }, " ", btnRight, " "))));
  }
};
MedBanner.style = medBannerCss;

exports.med_banner = MedBanner;
