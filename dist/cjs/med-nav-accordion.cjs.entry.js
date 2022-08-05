'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');

const medNavAccordionCss = ":host{display:block}.med-nav-accordion__item{--align-items:center;--background-header:hsl(var(--med-color-neutral-1));--background-content:hsl(var(--med-color-neutral-1));--padding:8px;--middle-width:100%}.med-nav-accordion__header{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;cursor:pointer}.med-nav-accordion__icon{stroke:hsl(var(--med-color-neutral-7));margin-left:auto}.med-accordion-item--open .med-nav-accordion__icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}";

const MedNavAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-nav-accordion': true,
      }) }, index.h("med-accordion-list", { class: "med-nav-accordion__list", "single-open": "false" }, index.h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true }, index.h("div", { class: "med-nav-accordion__header", slot: "full-header" }, index.h("med-type", { token: "p16b" }, this.titulo), index.h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })), index.h("div", { slot: "content" }, index.h("slot", null))))));
  }
};
MedNavAccordion.style = medNavAccordionCss;

exports.med_nav_accordion = MedNavAccordion;
