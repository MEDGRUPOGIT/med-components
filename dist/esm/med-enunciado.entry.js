/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, d as createEvent, h, H as Host } from './index-27668d5b.js';
import { g as generateMedColor } from './color-f9402468.js';

const medEnunciadoCss = ":host{--font-size:16px;--font-weight:400;--line-height:200%;--color:hsl(var(--med-color-neutral-10));--text-align:justify;--image-list-padding-top:16px;display:block;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);text-align:var(--text-align)}:host .list{padding:0;margin:0;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-top:var(--image-list-padding-top);-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){:host .list{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 992px){:host .list{-ms-flex-direction:row;flex-direction:row}}:host .list__item{max-width:100%;cursor:pointer;position:relative;max-height:250px;margin-bottom:15px}@media (min-width: 768px){:host .list__item{max-width:50%}}@media (min-width: 992px){:host .list__item{max-width:33.33%}}:host .list__image{width:100%;height:auto;display:block;max-height:250px}:host .list .image__zoom{background:hsl(var(--med-color-brand-1));width:24px;height:24px;border-radius:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:4px;right:4px}:host .list .image__zoom .med-icon{stroke:hsl(var(--med-color-neutral-10));font-size:14px}:host(.med-enunciado--skin){--font-size:14px;--line-height:line-height(14px)}";

const MedEnunciado = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.medGalleryRequest = createEvent(this, "medGalleryRequest", 7);
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
            imagens = (h("ul", { class: 'list' }, this.imagens.map((imagem) => (h("li", { class: "list__item", onClick: () => this.imageRequest(imagem) }, h("img", { class: "list__image", src: imagem, alt: "" }), h("div", { class: "image__zoom" }, h("ion-icon", { class: "med-icon", name: "med-busca" })))))));
        }
        return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
                'med-enunciado': true,
                [`med-enunciado--${dsName}`]: dsName !== undefined,
            }) }, h("slot", null), content &&
            h("span", { innerHTML: content }), imagens));
    }
};
MedEnunciado.style = medEnunciadoCss;

export { MedEnunciado as med_enunciado };
