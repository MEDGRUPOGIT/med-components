/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medCartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .wrapper{display:grid;-ms-flex-pack:center;justify-content:center;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 19vw)}}:host .wrapper--flex{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const MedCartaoRespostaLista = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isFlex = false;
  }
  render() {
    const { isFlex } = this;
    return (index.h(index.Host, { "from-stencil": true }, index.h("div", { class: `wrapper ${isFlex ? 'wrapper--flex' : ''}` }, index.h("slot", null))));
  }
};
MedCartaoRespostaLista.style = medCartaoRespostaListaCss;

exports.med_cartao_resposta_lista = MedCartaoRespostaLista;
