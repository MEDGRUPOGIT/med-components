'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medItemAulasCss = ":host(.med-item-aulas){background:hsl(var(--med-color-neutral-2));max-width:1200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.med-item-aulas) .med-item-aulas__top{display:-ms-flexbox;display:flex;padding:16px}:host(.med-item-aulas) .med-item-aulas__top ion-icon{min-width:1em}:host(.med-item-aulas) .med-item-aulas__info{width:100%;margin:0 16px}:host(.med-item-aulas) .med-item-aulas__professor,:host(.med-item-aulas) .med-item-aulas__nome,:host(.med-item-aulas) .med-item-aulas__total{margin:0}:host(.med-item-aulas) .med-item-aulas__nome{font-size:16px;font-weight:700;line-height:100%;color:hsl(var(--med-color-neutral-10))}:host(.med-item-aulas) .med-item-aulas__professor{font-size:12px;font-weight:400;line-height:100%;color:hsl(var(--med-color-neutral-7));opacity:0.8}:host(.med-item-aulas) .med-item-aulas__total{font-size:10px;font-weight:400;line-height:100%;color:hsl(var(--med-color-neutral-7));opacity:var(--med-pacity-level-semiopaque);margin-bottom:16px}";

const MedItemAulas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, professor, porcentagem, videos } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-item-aulas': true,
      }) }, index.h("div", { class: "med-item-aulas__top" }, index.h("slot", { name: "avatar" }), index.h("div", { class: "med-item-aulas__info" }, index.h("p", { class: "med-item-aulas__professor" }, "Professor"), index.h("p", { class: "med-item-aulas__nome" }, professor), index.h("p", { class: "med-item-aulas__total" }, Math.round(porcentagem), "% concluido - ", videos, " v\u00EDdeos"), index.h("slot", { name: "rate" })), index.h("ion-icon", { class: "med-icon", name: "med-direita" })), index.h("div", { class: "med-item-aulas__bottom" }, index.h("ion-progress-bar", { "ds-color": dsColor, "ds-name": "minimalist", value: porcentagem / 100 }))));
  }
};
MedItemAulas.style = medItemAulasCss;

exports.med_item_aulas = MedItemAulas;
