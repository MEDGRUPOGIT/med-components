import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTituloMateriaCss = ":host{--background:hsl(var(--med-color-brand-1));--color:hsl(var(--med-color-neutral-10))}:host(.med-titulo-materia){background:var(--background);padding:16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:1200px}:host(.med-titulo-materia) .med-titulo-materia__content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.med-titulo-materia) .med-titulo-materia__titulo{margin:0;font-size:16px;font-weight:700;line-height:100%;color:var(--color)}:host(.med-titulo-materia) .med-titulo-materia__descricao{margin:0;font-size:12px;font-weight:400;line-height:100%;color:var(--color)}::slotted([slot=start]){margin-right:16px}::slotted([slot=end]){margin-left:16px}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-neutral-10))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}";

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
