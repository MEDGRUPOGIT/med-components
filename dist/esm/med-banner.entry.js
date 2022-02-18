import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medBannerCss = ":host{--background:hsl(var(--med-color-neutral-2));--padding-header:8px;--padding-content:16px 16px 0 16px;--padding-right:16px;--padding-footer:8px 8px 8px 8px;--height-footer:32px}:host{display:block;background-color:var(--background);-webkit-transition:background-color 300ms ease-out, color 300ms ease-out;transition:background-color 300ms ease-out, color 300ms ease-out}.med-notification__titulo{--font-size:16px;--line-height:16px;--font-weight:600;text-align:justify}.med-notification__texto{--font-size:14px;--line-height:20px;text-align:justify}.med-notification__icon{stroke:hsl(var(--med-color-neutral-10));margin-left:auto;-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}.med-notification__content{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--padding-content)}.med-notification__left{-ms-flex:1;flex:1}.med-notification__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-bottom:var(--padding-header)}.med-notification__right{padding-left:var(--padding-right)}.med-notification__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:var(--height-footer);padding:var(--padding-footer)}@media (min-width: 992px){:host{--padding-titulo:16px;--padding-content:24px 24px 0 24px;--padding-footer:8px 16px 8px 16px;--height-footer:40px}:host__titulo{--font-size:20px;--line-height:20px}:host__texto{--font-size:16px;--line-height:24px}}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color) .med-notification__titulo{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__texto{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__icon{stroke:hsl(var(--med-color-contrast-fixed))}:host(.med-color) .med-notification__button{--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-neutral) .med-notification__titulo{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__texto{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__icon{stroke:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) .med-notification__button{--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}:host(.med-color-feedback) .med-notification__titulo{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__texto{--color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__icon{stroke:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) .med-notification__button{--color:hsl(var(--med-color-feedback-contrast))}";

const MedBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.btnLeftClick = createEvent(this, "btnLeftClick", 7);
    this.btnRightClick = createEvent(this, "btnRightClick", 7);
    this.onButtonLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onButtonRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { dsColor, titulo, texto, btnLeft, btnRight, icon, image } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-notification': true,
      }) }, (titulo || texto) && h("div", { class: "med-notification__content" }, h("div", { class: "med-notification__left" }, h("div", { class: "med-notification__header" }, titulo && h("med-type", { class: "med-notification__titulo" }, " ", titulo, " "), icon && h("ion-icon", { class: "med-notification__icon med-icon", name: icon })), texto && h("med-type", { class: "med-notification__texto" }, " ", texto, " ")), image && h("div", { class: "med-notification__right" }, h("img", { class: "med-notification__image", src: image }))), (btnLeft || btnRight) && h("div", { class: "med-notification__footer" }, btnLeft && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonLeftClick }, " ", btnLeft, " "), btnRight && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonRightClick }, " ", btnRight, " "))));
  }
};
MedBanner.style = medBannerCss;

export { MedBanner as med_banner };
