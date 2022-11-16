import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const medTilesCss = ":host{--padding:16px;--background:hsl(var(--med-color-neutral-2));--border-radius:8px;--border-background:hsl(var(--med-color-neutral-5));--border-background-selected:hsl(var(--med-color-brand-3));--font-size-title:24px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:12px;--color-label:hsl(var(--med-color-neutral-10))}:host(.med-tiles){display:-ms-flexbox;display:flex;background:var(--background);border-radius:var(--border-radius)}:host(.med-tiles) .med-tiles__content{padding:var(--padding);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left;width:100%}:host(.med-tiles) .med-tiles__border{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);width:8px;min-height:100%;background:var(--border-background)}:host(.med-tiles) .med-tiles__title{--font-size:var(--font-size-title);--font-weight:600;--line-height:24px;--color:var(--color-title);padding-bottom:4px}:host(.med-tiles) .med-tiles__label{--font-size:var(--font-size-label);--font-weight:400;--line-height:12px;--color:var(--color-label);padding-bottom:16px;text-transform:uppercase}::slotted(*){margin-left:auto}:host(.med-tiles--selected) .med-tiles__border{background:var(--border-background-selected)}:host(.med-color){--border-background-selected:hsl(var(--med-color-3))}:host(.med-color-neutral){--border-background-selected:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--border-background-selected:hsl(var(--med-color-feedback))}";

const MedTiles = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * todo
     */
    this.solid = false;
    /**
     * todo
     */
    this.selected = false;
  }
  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }) }, h("div", { class: "med-tiles__border" }), h("div", { class: "med-tiles__content" }, h("med-type", { class: "med-tiles__title", innerHTML: titulo }), h("med-type", { class: "med-tiles__label", innerHTML: label }), h("slot", null))));
  }
};
MedTiles.style = medTilesCss;

export { MedTiles as med_tiles };
