'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const medEnunciadoCss = ":host{--font-size:16px;--font-weight:400;--line-height:200%;--color:hsl(var(--med-color-neutral-10));--text-align:justify;--image-list-padding-top:16px;display:block;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);text-align:var(--text-align)}:host .list{padding:0;margin:0;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-top:var(--image-list-padding-top);-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){:host .list{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 992px){:host .list{-ms-flex-direction:row;flex-direction:row}}:host .list__item{max-width:100%;cursor:pointer;position:relative;max-height:250px}@media (min-width: 768px){:host .list__item{max-width:50%}}@media (min-width: 992px){:host .list__item{max-width:33.33%}}:host .list__image{width:100%;height:auto;display:block;max-height:250px}:host .list .image__zoom{background:hsl(var(--med-color-brand-1));width:24px;height:24px;border-radius:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:4px;right:4px}:host .list .image__zoom .med-icon{stroke:hsl(var(--med-color-neutral-10));font-size:14px}:host(.med-enunciado--skin){--font-size:14px;--line-height:24px}";

const MedEnunciado = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
  }
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    const { dsName } = this;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (index.h("ul", { class: 'list' }, this.imagens.map((imagem) => (index.h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) }, index.h("img", { class: "list__image", src: imagem, alt: "" }), index.h("div", { class: "image__zoom" }, index.h("ion-icon", { class: "med-icon", name: "med-busca" })))))));
    }
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(null, {
        'med-enunciado': true,
        [`med-enunciado--${dsName}`]: dsName !== undefined,
      }) }, index.h("slot", null), imagens));
  }
};
MedEnunciado.style = medEnunciadoCss;

exports.med_enunciado = MedEnunciado;
