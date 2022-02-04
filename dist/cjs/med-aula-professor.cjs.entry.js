'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');
const theme = require('./theme-21d701cc.js');

const medAulaProfessorCss = ".sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-brand-4))}.sc-med-aula-professor-h{display:block;position:relative}.med-aula-professor__base.sc-med-aula-professor{--padding:0;background:-webkit-gradient(linear, left top, right top, from(hsl(var(--med-color-brand-1))), color-stop(hsl(var(--med-color-neutral-2))), to(hsl(var(--med-color-neutral-2))));background:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;-webkit-transition:all 0.5s linear;transition:all 0.5s linear;background-size:200% 100%;background-position:100% 0;border-radius:8px}.med-aula-professor__container.sc-med-aula-professor{padding:16px;display:-ms-flexbox;display:flex}.med-aula-professor__icon.sc-med-aula-professor{stroke:var(--icon-color);margin-right:8px;min-width:24px}.med-aula-professor__middle.sc-med-aula-professor{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.med-aula-professor__caption.sc-med-aula-professor{margin:4px 0}.med-aula-professor__end.sc-med-aula-professor{margin-left:auto}.med-rotate.sc-med-aula-professor{-webkit-transition:-webkit-transform 300ms ease;transition:-webkit-transform 300ms ease;transition:transform 300ms ease;transition:transform 300ms ease, -webkit-transform 300ms ease}.accordion-item--open.sc-med-aula-professor .med-rotate.sc-med-aula-professor{--rotate:rotate(180deg)}.med-aula-professor--active.sc-med-aula-professor-h .med-aula-professor__base.sc-med-aula-professor{background-position:0 0}.in-accordion.sc-med-aula-professor-h ion-progress-bar.sc-med-aula-professor{display:none}.med-color.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-aula-professor-h{--icon-color:hsl(var(--med-color-feedback))}";

const MedAulaProfessor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * TO DO
      */
    this.active = false;
  }
  render() {
    const { dsColor, icon, titulo, professores, videos, value, active } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-aula-professor': true,
        'med-aula-professor--active': active,
        'in-accordion': theme.hostContext('med-accordion-item', this.el),
      }) }, index.h("div", { class: "med-aula-professor__base" }, index.h("div", { class: "med-aula-professor__container" }, index.h("ion-icon", { class: "med-aula-professor__icon med-icon", name: icon }), index.h("div", { class: "med-aula-professor__middle" }, index.h("med-type", { token: "p16b" }, titulo), index.h("med-type", { class: "med-aula-professor__caption", token: "p14" }, professores, " Professor, ", videos, " V\u00EDdeos"), index.h("med-type", { token: "p10" }, value * 100, "% Conclu\u00EDdo")), index.h("div", { class: "med-aula-professor__end" }, index.h("slot", null))), index.h("ion-progress-bar", { "ds-name": "minimalist", "ds-color": dsColor, value: value }))));
  }
  get el() { return index.getElement(this); }
};
MedAulaProfessor.style = medAulaProfessorCss;

exports.med_aula_professor = MedAulaProfessor;
