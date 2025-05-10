/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medEnunciadoCss = ".sc-med-enunciado-h{--font-size:16px;--font-weight:400;--line-height:200%;--color:hsl(var(--med-color-neutral-10));--text-align:justify;--image-list-padding-top:16px;display:block;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);text-align:var(--text-align)}.sc-med-enunciado-h .list.sc-med-enunciado{padding:0;margin:0;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-top:var(--image-list-padding-top);-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){.sc-med-enunciado-h .list.sc-med-enunciado{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 992px){.sc-med-enunciado-h .list.sc-med-enunciado{-ms-flex-direction:row;flex-direction:row}}.sc-med-enunciado-h .list__item.sc-med-enunciado{max-width:100%;cursor:pointer;position:relative;max-height:250px;margin-bottom:15px}@media (min-width: 768px){.sc-med-enunciado-h .list__item.sc-med-enunciado{max-width:50%}}@media (min-width: 992px){.sc-med-enunciado-h .list__item.sc-med-enunciado{max-width:33.33%}}.sc-med-enunciado-h .list__image.sc-med-enunciado{width:100%;height:auto;display:block;max-height:250px}.sc-med-enunciado-h .list.sc-med-enunciado .image__zoom.sc-med-enunciado{background:hsl(var(--med-color-brand-1));width:24px;height:24px;border-radius:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:4px;right:4px}.sc-med-enunciado-h .list.sc-med-enunciado .image__zoom.sc-med-enunciado .med-icon.sc-med-enunciado{stroke:hsl(var(--med-color-neutral-10));font-size:14px}.med-enunciado--skin.sc-med-enunciado-h{--font-size:14px;--line-height:line-height(14px)}";

const MedEnunciado = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
    this.imagens = undefined;
    this.dsName = undefined;
    this.content = undefined;
  }
  imageRequest(imagem) {
    this.medGalleryRequest.emit(imagem);
  }
  render() {
    let imagens;
    const { content, dsName } = this;
    if (this.imagens) {
      this.imagens = typeof this.imagens === 'string' ? JSON.parse(this.imagens) : this.imagens;
      imagens = (index.h("ul", { class: 'list' }, this.imagens.map((imagem) => (index.h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) }, index.h("img", { class: "list__image", src: imagem, alt: "" }), index.h("div", { class: "image__zoom" }, index.h("ion-icon", { class: "med-icon", name: "med-busca" })))))));
    }
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(null, {
        'med-enunciado': true,
        [`med-enunciado--${dsName}`]: dsName !== undefined,
      }) }, index.h("slot", null), content &&
      index.h("span", { innerHTML: content }), imagens));
  }
};
MedEnunciado.style = medEnunciadoCss;

exports.med_enunciado = MedEnunciado;
