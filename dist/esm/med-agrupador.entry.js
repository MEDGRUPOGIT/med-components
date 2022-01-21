import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medAgrupadorCss = ":host{--color:hsl(var(--med-color-brand-3))}:host(.med-agrupador){font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);line-height:var(--med-line-height-compressed);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;color:var(--color);cursor:pointer}:host(.med-agrupador) .med-agrupador__icon{font-size:24px;stroke:var(--color)}:host(.med-agrupador) .med-agrupador__expandir{display:block}:host(.med-agrupador) .med-agrupador__ocultar{display:none}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color) .med-agrupador__icon{--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-neutral) .med-agrupador__icon{--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}:host(.med-color-feedback) .med-agrupador__icon{--color:hsl(var(--med-color-feedback))}:host(.med-agrupador--collapsed){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.med-agrupador--collapsed) .med-agrupador__expandir{display:none}:host(.med-agrupador--collapsed) .med-agrupador__ocultar{display:block}:host(.med-agrupador--collapsed) .med-agrupador__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}";

const MedAgrupador = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * TODO.
      */
    this.texto1 = `Expandir a lista`;
    /**
      * TODO.
      */
    this.texto2 = `Ocultar a lista`;
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
    * Define o estado do componente programaticamente.
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { dsColor, collapsed, texto1, texto2 } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-agrupador': true,
        'med-agrupador--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } }, h("div", { class: "med-agrupador__expandir" }, texto1), h("div", { class: "med-agrupador__ocultar" }, texto2), h("ion-icon", { class: "med-icon med-agrupador__icon", name: "med-baixo" })));
  }
};
MedAgrupador.style = medAgrupadorCss;

export { MedAgrupador as med_agrupador };
