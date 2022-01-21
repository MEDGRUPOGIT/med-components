'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medCartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .wrapper{display:grid;-ms-flex-pack:center;justify-content:center;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 19vw)}}";

const MedCartaoRespostaLista = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("div", { class: "wrapper" }, index.h("slot", null))));
  }
};
MedCartaoRespostaLista.style = medCartaoRespostaListaCss;

exports.med_cartao_resposta_lista = MedCartaoRespostaLista;
