import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTituloMateriaCss = ":host{--background:hsl(var(--med-color-brand-1));--color:hsl(var(--med-color-neutral-10))}:host(.med-titulo-materia){background:var(--background);padding:var(--med-spacing-inline-base);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:1200px}:host(.med-titulo-materia) .med-titulo-materia__content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.med-titulo-materia) .med-titulo-materia__titulo{margin:0;font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-bold);line-height:var(--med-line-height-compressed);color:var(--color)}:host(.med-titulo-materia) .med-titulo-materia__descricao{margin:0;font-size:var(--med-font-size-xxxs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-default);color:var(--color)}::slotted([slot=start]){margin-right:var(--med-spacing-inline-base)}::slotted([slot=end]){margin-left:var(--med-spacing-inline-base)}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-neutral-10))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}";

const MedTituloMateria = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, titulo, descricao } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-titulo-materia': true,
      }) }, h("slot", { name: "start" }), h("div", { class: "med-titulo-materia__content" }, h("h3", { class: "med-titulo-materia__titulo" }, titulo), h("p", { class: "med-titulo-materia__descricao" }, descricao)), h("slot", { name: "end" })));
  }
};
MedTituloMateria.style = medTituloMateriaCss;

export { MedTituloMateria as med_titulo_materia };
