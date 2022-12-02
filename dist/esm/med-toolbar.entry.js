import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const medToolbarCss = ":host{--background:hsl(var(--med-color-neutral-2));--center-width:auto;--center-margin:0 16px;--justify-content:space-between;padding:8px 16px;background:var(--background);min-height:48px;height:auto;display:block;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.container{max-width:1200px;width:100%;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:var(--justify-content);justify-content:var(--justify-content)}.container__center{margin:var(--center-margin);width:var(--center-width)}::slotted(*){color:hsl(var(--med-color-neutral-10));stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-1))}:host(.med-color) ::slotted(*){color:hsl(var(--med-color-neutral-10));stroke:hsl(var(--med-color-neutral-10))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-neutral) ::slotted(*){color:hsl(var(--med-color-neutral-10));stroke:hsl(var(--med-color-neutral-10))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}:host(.med-color-feedback) ::slotted(*){color:hsl(var(--med-color-neutral-1));stroke:hsl(var(--med-color-neutral-1))}";

const MedToolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-toolbar': true,
      }) }, h("div", { class: "container" }, h("slot", { name: "start" }), h("div", { class: "container__center" }, h("slot", null)), h("slot", { name: "end" }))));
  }
};
MedToolbar.style = medToolbarCss;

export { MedToolbar as med_toolbar };
