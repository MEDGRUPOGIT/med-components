import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medNavCss = ":host{--logo-background:hsl(var(--med-color-brand-2))}:host{position:relative;display:block}.med-nav__container{padding:24px;padding-top:calc(24px + var(--ion-safe-area-top, 0));padding-bottom:calc(24px + var(--ion-safe-area-bottom));background:hsl(var(--med-color-neutral-1));min-width:240px;height:calc(100vh - calc(24px + var(--ion-safe-area-top, 0)) - calc(24px + var(--ion-safe-area-bottom)));overflow:auto;-webkit-transition:300ms all ease;transition:300ms all ease}.med-nav__container::after{content:\"\";background:-webkit-gradient(linear, left bottom, left top, from(#121616), to(rgba(18, 22, 22, 0)));background:linear-gradient(360deg, #121616 0%, rgba(18, 22, 22, 0) 100%);width:100%;height:24px;position:fixed;bottom:0;left:0}.med-nav__logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.med-nav__icon-wrapper{border-radius:50%;min-width:40px;height:40px;-ms-flex-align:center;align-items:center;background:var(--logo-background);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-right:16px}.med-nav__icon{stroke:hsl(var(--med-color-neutral-10))}.med-nav__toggle{position:absolute;bottom:24px;right:24px}::slotted(med-nav-item){margin-bottom:8px}:host(.med-color){--logo-background:hsl(var(--med-color-2))}:host(.med-color-neutral){--logo-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--logo-background:hsl(var(--med-color-feedback))}.med-nav-simple{position:absolute;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:300ms all ease;transition:300ms all ease}:host(.med-nav--active) .med-nav__container{-webkit-transform:translateX(-100%);transform:translateX(-100%);position:absolute}:host(.med-nav--active) .med-nav-simple{-webkit-transform:translateX(0);transform:translateX(0);position:relative;-webkit-transition-delay:300ms;transition-delay:300ms}";

const MedNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * TODO.
      */
    this.active = false;
  }
  async watchClick() {
    this.active = !this.active;
  }
  clickHandle() {
    this.active = !this.active;
  }
  render() {
    const { dsColor, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav': true,
        'med-nav--active': active
      }) }, h("nav", { class: "med-nav__container" }, h("div", { class: "med-nav__logo" }, h("div", { class: "med-nav__icon-wrapper" }, h("ion-icon", { class: "med-nav__icon med-icon med-icon--sm", name: "med-logo" })), h("med-type", { token: "h24", "ds-color": "neutral-10" }, "MEDSoft")), h("slot", null), h("ion-button", { "ds-color": dsColor, class: "med-nav__toggle", "ds-name": "tertiary", onClick: () => this.clickHandle() }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" }))), h("med-nav-simple", { "ds-color": dsColor })));
  }
};
MedNav.style = medNavCss;

export { MedNav as med_nav };
