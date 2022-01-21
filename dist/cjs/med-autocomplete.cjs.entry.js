'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medAutocompleteCss = ":host{display:block;background:hsl(var(--med-color-neutral-2));-webkit-box-shadow:var(--med-shadow-level-3);box-shadow:var(--med-shadow-level-3);border-radius:var(--med-border-radius-sm);font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);color:hsl(var(--med-color-neutral-10));height:auto;min-height:192px;text-align:left;max-width:1100px;position:relative;margin:0 auto}:host .list{list-style:none;margin:0;padding:0}:host .item{padding:var(--med-spacing-squish-xs);height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}:host .item:first-child{border-top-left-radius:var(--med-border-radius-sm);border-top-right-radius:var(--med-border-radius-sm)}:host .item:last-child{border-bottom-left-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm)}:host .msg{position:relative;left:var(--med-spacing-inset-xs);top:var(--med-spacing-inset-sm)}ion-icon{margin-right:var(--med-spacing-inline-xxxs);stroke:hsl(var(--med-color-neutral-10));font-size:24px;padding:8px;width:16px;height:16px;border-radius:50%;background:hsl(var(--med-color-neutral-1))}@media (any-hover: hover){:host .item:hover{background:hsl(var(--med-color-neutral-4))}}";

const MedAutocomplete = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * A lista de items a ser renderizada.
     */
    this.list = false;
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("ul", { class: "list" }, index.h("li", { class: "item" }, index.h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"), "Nefrologia"), index.h("li", { class: "item" }, index.h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"), "Neurocirurgia"), index.h("li", { class: "item" }, index.h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"), "Neurologia"), index.h("li", { class: "item" }, index.h("ion-icon", { class: "med-icon", name: "med-alerta" }, "ion-button"), "Nutrologia")), this.list && index.h("span", { class: "msg" }, "Nenhum item encontrado.")));
  }
};
MedAutocomplete.style = medAutocompleteCss;

exports.med_autocomplete = MedAutocomplete;
