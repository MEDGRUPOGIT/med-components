/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medCartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .wrapper{display:grid;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 19vw)}}:host .wrapper--flex{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .wrapper--justify-center{-ms-flex-pack:center;justify-content:center}";

const MedCartaoRespostaLista = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isFlex = false;
    this.justifyCenter = false;
  }
  render() {
    const { isFlex, justifyCenter } = this;
    return (index.h(index.Host, { "from-stencil": true }, index.h("div", { class: `wrapper
            ${isFlex ? "wrapper--flex" : ""}
            ${justifyCenter ? "wrapper--justify-center" : ""}
          ` }, index.h("slot", null))));
  }
};
MedCartaoRespostaLista.style = medCartaoRespostaListaCss;

exports.med_cartao_resposta_lista = MedCartaoRespostaLista;
