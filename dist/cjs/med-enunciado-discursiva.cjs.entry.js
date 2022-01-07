'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medEnunciadoDiscursivaCss = ":host{--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-regular);--line-height:var(--med-line-height-double);--color:var(--med-theme-color, var(--med-color-neutral-dark-20));--text-align:justify;--image-list-padding-top:var(--med-spacing-stack-base);display:block;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);text-align:var(--text-align)}:host .list{padding:0;margin:0;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:var(--image-list-padding-top);-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){:host .list{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 992px){:host .list{-ms-flex-direction:row;flex-direction:row}}:host .list__item{max-width:100%;cursor:pointer}:host .list__item:not(:last-child){padding-right:0;padding-bottom:16px}@media (min-width: 768px){:host .list__item{max-width:50%;padding-bottom:0}:host .list__item:not(:last-child){padding-right:16px}}@media (min-width: 992px){:host .list__item{max-width:33.33%;padding-bottom:0}:host .list__item:not(:last-child){padding-right:16px}}:host .list__image{width:100%;height:auto;display:block}:host .number{font-weight:var(--med-font-weight-bold);color:var(--med-color-questoes-medium)}";

const MedEnunciadoDiscursiva = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
  }
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (index.h("ul", { class: 'list' }, this.imagens.map((imagem) => (index.h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) }, index.h("img", { class: "list__image", src: imagem, alt: "" }))))));
    }
    return (index.h(index.Host, { "from-stencil": true }, index.h("span", { class: "number" }, "01 -"), index.h("slot", null), imagens));
  }
};
MedEnunciadoDiscursiva.style = medEnunciadoDiscursivaCss;

exports.med_enunciado_discursiva = MedEnunciadoDiscursiva;
