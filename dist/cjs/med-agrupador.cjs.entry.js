/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const medAgrupadorCss = ":host{--color:hsl(var(--med-color-brand-4))}:host{font-size:12px;font-weight:400;line-height:12px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;color:var(--color);cursor:pointer}.med-agrupador__expandir{display:block}.med-agrupador__ocultar{display:none}.med-agrupador__icon{font-size:24px;stroke:var(--color)}:host(.med-color){--color:hsl(var(--med-color-4))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}:host(.med-agrupador--collapsed){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.med-agrupador--collapsed) .med-agrupador__expandir{display:none}:host(.med-agrupador--collapsed) .med-agrupador__ocultar{display:block}:host(.med-agrupador--collapsed) .med-agrupador__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}";

const MedAgrupador = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.labelDefault = 'Expandir a lista';
    this.labelAlternativo = 'Ocultar a lista';
    this.collapsed = false;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { dsColor, collapsed, labelDefault, labelAlternativo } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-agrupador': true,
        'med-agrupador--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } }, index.h("div", { class: "med-agrupador__expandir" }, labelDefault), index.h("div", { class: "med-agrupador__ocultar" }, labelAlternativo), index.h("ion-icon", { class: "med-icon med-agrupador__icon", name: "med-baixo" })));
  }
};
MedAgrupador.style = medAgrupadorCss;

exports.med_agrupador = MedAgrupador;
