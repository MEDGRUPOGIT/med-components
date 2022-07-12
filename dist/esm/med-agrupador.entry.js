import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medAgrupadorCss = ":host{--color:hsl(var(--med-color-brand-4))}:host{font-size:12px;font-weight:400;line-height:12px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;color:var(--color);cursor:pointer}.med-agrupador__expandir{display:block}.med-agrupador__ocultar{display:none}.med-agrupador__icon{font-size:24px;stroke:var(--color)}:host(.med-color){--color:hsl(var(--med-color-4))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}:host(.med-agrupador--collapsed){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.med-agrupador--collapsed) .med-agrupador__expandir{display:none}:host(.med-agrupador--collapsed) .med-agrupador__ocultar{display:block}:host(.med-agrupador--collapsed) .med-agrupador__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}";

const MedAgrupador = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o texto no estado default.
      */
    this.labelDefault = 'Expandir a lista';
    /**
      * Define o texto no estado active.
      */
    this.labelAlternativo = 'Ocultar a lista';
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
    const { dsColor, collapsed, labelDefault, labelAlternativo } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-agrupador': true,
        'med-agrupador--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } }, h("div", { class: "med-agrupador__expandir" }, labelDefault), h("div", { class: "med-agrupador__ocultar" }, labelAlternativo), h("ion-icon", { class: "med-icon med-agrupador__icon", name: "med-baixo" })));
  }
};
MedAgrupador.style = medAgrupadorCss;

export { MedAgrupador as med_agrupador };
