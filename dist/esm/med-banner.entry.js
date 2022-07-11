import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medBannerCss = ".sc-med-banner-h{--background:hsl(var(--med-color-neutral-2));--padding-header:8px;--padding-content:16px 16px 0 16px;--padding-right:16px;--padding-footer:8px 8px 8px 8px;--height-footer:auto}.sc-med-banner-h{display:block;background-color:var(--background);-webkit-transition:background-color 300ms ease-out, color 300ms ease-out;transition:background-color 300ms ease-out, color 300ms ease-out}.med-notification__titulo.sc-med-banner{--font-size:16px;--line-height:24px;--font-weight:600;text-align:justify}.med-notification__texto.sc-med-banner{--font-size:14px;--line-height:20px;text-align:justify}.med-notification__icon.sc-med-banner{stroke:hsl(var(--med-color-neutral-10));margin-left:auto;-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}.med-notification__content.sc-med-banner{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--padding-content)}.med-notification__left.sc-med-banner{-ms-flex:1;flex:1}.med-notification__header.sc-med-banner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-bottom:var(--padding-header)}.med-notification__right.sc-med-banner{padding-left:var(--padding-right)}.med-notification__footer.sc-med-banner{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:var(--height-footer);padding:var(--padding-footer)}.med-notification__button.sc-med-banner{--padding:0}@media (min-width: 992px){.sc-med-banner-h{--padding-titulo:16px;--padding-content:24px 24px 0 24px;--padding-footer:8px 16px 8px 16px}__titulo.sc-med-banner-h{--font-size:20px;--line-height:20px}__texto.sc-med-banner-h{--font-size:16px;--line-height:24px}}.med-color.sc-med-banner-h{--background:hsl(var(--med-color-3))}.med-color.sc-med-banner-h .med-notification__titulo.sc-med-banner{--color:hsl(var(--med-color-contrast-fixed))}.med-color.sc-med-banner-h .med-notification__texto.sc-med-banner{--color:hsl(var(--med-color-contrast-fixed))}.med-color.sc-med-banner-h .med-notification__icon.sc-med-banner{stroke:hsl(var(--med-color-contrast-fixed))}.med-color.sc-med-banner-h .med-notification__button.sc-med-banner{--color:hsl(var(--med-color-contrast-fixed))}.med-color-neutral.sc-med-banner-h{--background:hsl(var(--med-color-neutral))}.med-color-neutral.sc-med-banner-h .med-notification__titulo.sc-med-banner{--color:hsl(var(--med-color-neutral-contrast))}.med-color-neutral.sc-med-banner-h .med-notification__texto.sc-med-banner{--color:hsl(var(--med-color-neutral-contrast))}.med-color-neutral.sc-med-banner-h .med-notification__icon.sc-med-banner{stroke:hsl(var(--med-color-neutral-contrast))}.med-color-neutral.sc-med-banner-h .med-notification__button.sc-med-banner{--color:hsl(var(--med-color-neutral-contrast))}.med-color-feedback.sc-med-banner-h{--background:hsl(var(--med-color-feedback))}.med-color-feedback.sc-med-banner-h .med-notification__titulo.sc-med-banner{--color:hsl(var(--med-color-feedback-contrast))}.med-color-feedback.sc-med-banner-h .med-notification__texto.sc-med-banner{--color:hsl(var(--med-color-feedback-contrast))}.med-color-feedback.sc-med-banner-h .med-notification__icon.sc-med-banner{stroke:hsl(var(--med-color-feedback-contrast))}.med-color-feedback.sc-med-banner-h .med-notification__button.sc-med-banner{--color:hsl(var(--med-color-feedback-contrast))}";

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
      }) }, (titulo || texto) && h("div", { class: "med-notification__content" }, h("div", { class: "med-notification__left" }, h("div", { class: "med-notification__header" }, titulo && h("med-type", { class: "med-notification__titulo" }, " ", titulo, " "), icon && h("ion-icon", { class: "med-notification__icon med-icon", name: icon })), texto && h("med-type", { class: "med-notification__texto" }, " ", texto, " ")), image && h("div", { class: "med-notification__right" }, h("img", { class: "med-notification__image", src: image }))), (btnLeft || btnRight) && h("div", { class: "med-notification__footer" }, btnLeft && h("ion-button", { class: "med-notification__button", mode: "ios", "ds-color": dsColor, fill: "clear", "ds-size": "xs", onClick: this.onButtonLeftClick }, " ", btnLeft, " "), btnRight && h("ion-button", { class: "med-notification__button", mode: "ios", "ds-color": dsColor, fill: "clear", "ds-size": "xs", onClick: this.onButtonRightClick }, " ", btnRight, " "))));
  }
};
MedBanner.style = medBannerCss;

export { MedBanner as med_banner };
