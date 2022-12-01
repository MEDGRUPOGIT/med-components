import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-a516669b.js';

const medNavAccordionCss = ":host{display:block}.med-nav-accordion__item{--align-items:center;--background-header:hsl(var(--med-color-neutral-1));--background-content:hsl(var(--med-color-neutral-1));--padding:8px;--middle-width:100%}.med-nav-accordion__header{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;cursor:pointer}.med-nav-accordion__icon{stroke:hsl(var(--med-color-neutral-7));margin-left:auto}.med-accordion-item--open .med-nav-accordion__icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}";

const MedNavAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-accordion': true,
      }) }, h("med-accordion-list", { class: "med-nav-accordion__list", "single-open": "false" }, h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true }, h("div", { class: "med-nav-accordion__header", slot: "full-header" }, h("med-type", { token: "p16b" }, this.titulo), h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })), h("div", { slot: "content" }, h("slot", null))))));
  }
};
MedNavAccordion.style = medNavAccordionCss;

export { MedNavAccordion as med_nav_accordion };
