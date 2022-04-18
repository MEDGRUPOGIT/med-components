import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTilesCss = ":host{--padding:16px;--background:hsl(var(--med-color-neutral-2));--border-radius:8px;--border-background:hsl(var(--med-color-neutral-5));--border-background-selected:hsl(var(--med-color-brand-3));--font-size-title:20px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:16px;--color-label:hsl(var(--med-color-brand-3))}:host(.med-tiles){display:-ms-flexbox;display:flex;background:var(--background);border-radius:var(--border-radius)}:host(.med-tiles) .med-tiles__content{padding:var(--padding);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left;width:100%}:host(.med-tiles) .med-tiles__border{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);width:8px;min-height:100%;background:var(--border-background)}:host(.med-tiles) .med-tiles__title{margin:0;padding:0;font-size:var(--font-size-title);font-weight:600;line-height:100%;color:var(--color-title);padding-bottom:4px}:host(.med-tiles) .med-tiles__label{margin:0;padding:0;font-size:var(--font-size-label);font-weight:400;line-height:100%;color:var(--color-label);padding-bottom:16px}::slotted(*){margin-left:auto}:host(.med-tiles--selected) .med-tiles__border{background:var(--border-background-selected)}:host(.med-color){--color-label:hsl(var(--med-color-3));--border-background-selected:hsl(var(--med-color-3))}:host(.med-color-neutral){--color-label:hsl(var(--med-color-neutral));--border-background-selected:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color-label:hsl(var(--med-color-feedback));--border-background-selected:hsl(var(--med-color-feedback))}:host(.med-tiles.med-solid){--background:hsl(var(--med-color-brand-3));--border-background-selected:hsl(var(--med-color-contrast-fixed));--color-label:hsl(var(--med-color-contrast-fixed))}:host(.med-tiles.med-solid) .med-tiles__badge{--background:hsl(var(--med-color-brand-3))}:host(.med-tiles.med-solid.ion-color){--background:hsl(var(--med-color-3));--border-background-selected:hsl(var(--med-color-contrast-fixed));--color-label:hsl(var(--med-color-contrast-fixed))}:host(.med-tiles.med-solid.ion-color) .med-tiles__badge{--background:hsl(var(--med-color-1)) !important}:host(.med-tiles.med-solid.med-neutral){--background:var(--med-neutral);--border-background-selected:var(--med-neutral-contrast);--color-label:var(--med-neutral-contrast)}:host(.med-tiles.med-solid.med-neutral) .med-tiles__badge{--background:var(--med-neutral-contrast)}";

const MedTiles = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.solid = false;
    /**
     * TODO
     */
    this.selected = false;
  }
  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }) }, h("div", { class: "med-tiles__border" }), h("div", { class: "med-tiles__content" }, h("h3", { class: "med-tiles__title", innerHTML: titulo }), h("h4", { class: "med-tiles__label", innerHTML: label }), h("slot", null))));
  }
};
MedTiles.style = medTilesCss;

export { MedTiles as med_tiles };
