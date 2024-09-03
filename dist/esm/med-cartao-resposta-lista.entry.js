/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const medCartaoRespostaListaCss = ":host{position:relative;padding:0px;width:100%;max-width:1200px;margin:0px auto}:host .wrapper{display:grid;grid-template-columns:repeat(auto-fit, 10vw)}@media (max-width: 1199.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 10vw)}}@media (max-width: 991.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 13vw)}}@media (max-width: 767.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 14vw)}}@media (max-width: 575.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 17vw)}}@media (max-width: 379.98px){:host .wrapper{grid-template-columns:repeat(auto-fit, 19vw)}}:host .wrapper--flex{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .wrapper--justify-center{-ms-flex-pack:center;justify-content:center}";

const MedCartaoRespostaLista = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isFlex = false;
    this.justifyCenter = false;
  }
  render() {
    const { isFlex, justifyCenter } = this;
    return (h(Host, { "from-stencil": true }, h("div", { class: `wrapper
            ${isFlex ? "wrapper--flex" : ""}
            ${justifyCenter ? "wrapper--justify-center" : ""}
          ` }, h("slot", null))));
  }
};
MedCartaoRespostaLista.style = medCartaoRespostaListaCss;

export { MedCartaoRespostaLista as med_cartao_resposta_lista };
