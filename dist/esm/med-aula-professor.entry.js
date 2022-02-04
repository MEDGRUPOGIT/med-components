import { r as registerInstance, h, H as Host, i as getElement } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';
import { h as hostContext } from './theme-3b0eafd2.js';

const medAulaProfessorCss = ".sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-brand-4))}.sc-med-aula-professor-h{display:block;position:relative}.med-aula-professor__base.sc-med-aula-professor{--padding:0;background:-webkit-gradient(linear, left top, right top, from(hsl(var(--med-color-brand-1))), color-stop(hsl(var(--med-color-neutral-2))), to(hsl(var(--med-color-neutral-2))));background:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;-webkit-transition:all 0.5s linear;transition:all 0.5s linear;background-size:200% 100%;background-position:100% 0;border-radius:8px}.med-aula-professor__container.sc-med-aula-professor{padding:16px;display:-ms-flexbox;display:flex}.med-aula-professor__icon.sc-med-aula-professor{stroke:var(--icon-color);margin-right:8px;min-width:24px}.med-aula-professor__middle.sc-med-aula-professor{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.med-aula-professor__caption.sc-med-aula-professor{margin:4px 0}.med-aula-professor__end.sc-med-aula-professor{margin-left:auto}.med-rotate.sc-med-aula-professor{-webkit-transition:-webkit-transform 300ms ease;transition:-webkit-transform 300ms ease;transition:transform 300ms ease;transition:transform 300ms ease, -webkit-transform 300ms ease}.accordion-item--open.sc-med-aula-professor .med-rotate.sc-med-aula-professor{--rotate:rotate(180deg)}.med-aula-professor--active.sc-med-aula-professor-h .med-aula-professor__base.sc-med-aula-professor{background-position:0 0}.in-accordion.sc-med-aula-professor-h ion-progress-bar.sc-med-aula-professor{display:none}.med-color.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-feedback))}";

const MedAulaProfessor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * TO DO
      */
    this.active = false;
  }
  render() {
    const { dsColor, icon, titulo, professores, videos, value, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-aula-professor': true,
        'med-aula-professor--active': active,
        'in-accordion': hostContext('med-accordion-item', this.el),
      }) }, h("div", { class: "med-aula-professor__base" }, h("div", { class: "med-aula-professor__container" }, h("ion-icon", { class: "med-aula-professor__icon med-icon", name: icon }), h("div", { class: "med-aula-professor__middle" }, h("med-type", { token: "p16b" }, titulo), h("med-type", { class: "med-aula-professor__caption", token: "p14" }, professores, " Professor, ", videos, " V\u00EDdeos"), h("med-type", { token: "p10" }, value * 100, "% Conclu\u00EDdo")), h("div", { class: "med-aula-professor__end" }, h("slot", null))), h("ion-progress-bar", { "ds-name": "minimalist", "ds-color": dsColor, value: value }))));
  }
  get el() { return getElement(this); }
};
MedAulaProfessor.style = medAulaProfessorCss;

export { MedAulaProfessor as med_aula_professor };
