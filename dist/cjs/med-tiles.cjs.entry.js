/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medTilesCss = ":host{--padding:16px;--background:hsl(var(--med-color-neutral-2));--border-radius:8px;--border-background:hsl(var(--med-color-neutral-5));--border-background-selected:hsl(var(--med-color-brand-3));--font-size-title:24px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:12px;--color-label:hsl(var(--med-color-neutral-10))}:host(.med-tiles){display:-ms-flexbox;display:flex;background:var(--background);border-radius:var(--border-radius)}:host(.med-tiles) .med-tiles__content{padding:var(--padding);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left;width:100%}:host(.med-tiles) .med-tiles__border{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);width:8px;min-height:100%;background:var(--border-background)}:host(.med-tiles) .med-tiles__title{--font-size:var(--font-size-title);--font-weight:600;--line-height:24px;--color:var(--color-title);padding-bottom:4px}:host(.med-tiles) .med-tiles__label{--font-size:var(--font-size-label);--font-weight:400;--line-height:12px;--color:var(--color-label);padding-bottom:16px;text-transform:uppercase}::slotted(*){margin-left:auto}:host(.med-tiles--selected) .med-tiles__border{background:var(--border-background-selected)}:host(.med-color){--border-background-selected:hsl(var(--med-color-3))}:host(.med-color-neutral){--border-background-selected:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--border-background-selected:hsl(var(--med-color-feedback))}";

const MedTiles = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.titulo = undefined;
    this.label = undefined;
    this.badge = undefined;
    this.solid = false;
    this.selected = false;
  }
  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }) }, index.h("div", { class: "med-tiles__border" }), index.h("div", { class: "med-tiles__content" }, index.h("med-type", { class: "med-tiles__title", innerHTML: titulo }), index.h("med-type", { class: "med-tiles__label", innerHTML: label }), index.h("slot", null))));
  }
};
MedTiles.style = medTilesCss;

exports.med_tiles = MedTiles;
