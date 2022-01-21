import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { m as modalController } from './overlays-0b1670e0.js';
import './ionic-global-10d9ffcf.js';
import './hardware-back-button-3fda9f12.js';
import './helpers-6b411283.js';

const medImageZoomCss = ".sc-med-image-zoom-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;background-color:hsl(var(--med-color-neutral-1))}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom{position:fixed;width:100%;z-index:1;top:0}.sc-med-image-zoom-h .zoom-header__title.sc-med-image-zoom{color:hsl(var(--med-color-neutral-10));font-size:var(--med-font-size-xs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold)}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom .med-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-content.sc-med-image-zoom{--background:hsl(var(--med-color-neutral-1));height:100%;overflow-y:hidden}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom{--bullet-background-active:hsl(var(--med-color-brand-3));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100%}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom .swiper-pagination-bullet-active.sc-med-image-zoom{border:2px solid hsl(var(--med-color-brand-3))}.sc-med-image-zoom-h .swiper-zoom-container.sc-med-image-zoom{-ms-flex-direction:column;flex-direction:column}.sc-med-image-zoom-h .zoom-imagem.sc-med-image-zoom{width:auto;max-width:calc(100% - 50px);height:auto;max-height:calc(100% - 100px);-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.sc-med-image-zoom-h .swiper-slide-zoomed.sc-med-image-zoom .zoom-legenda-container.sc-med-image-zoom{display:none !important}.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;text-align:justify}@media (max-width: 992px){.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;padding-right:70px;text-align:justify}}.sc-med-image-zoom-h .zoom-legenda.sc-med-image-zoom{display:inline-block;color:hsl(var(--med-color-neutral-10));font-size:14px;max-width:992px;overflow-y:auto;max-height:60px}.sc-med-image-zoom-h .marca-agua-superior.sc-med-image-zoom{position:absolute;top:29%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.01;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .marca-agua-inferior.sc-med-image-zoom{position:absolute;top:52%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.02;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .zoom-button-container.sc-med-image-zoom{position:fixed;bottom:var(--med-spacing-stack-md);right:15px;height:175px;width:48px}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom{width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;background-color:hsl(var(--med-color-neutral-6))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom ion-icon.sc-med-image-zoom{font-size:24px;stroke:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom:not(:last-child){margin-bottom:var(--med-spacing-stack-base)}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom{background-color:hsl(var(--med-color-neutral-5))}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom ion-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}";

const MedImageZoom = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.imagens = [];
    this.sliderOpts = {
      zoom: {
        maxRation: 5
      },
      intialSlide: 1,
    };
  }
  zoom(zoomIn) {
    const zoom = this.slider.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    }
    else {
      zoom.out();
    }
  }
  dismiss() {
    modalController.dismiss();
  }
  render() {
    return (h(Host, { "from-stencil": true }, h("med-header", { class: "zoom-header" }, h("med-navbar", { slot: "navbar", "ds-name": "transparent", "ds-theme": "light" }, h("span", { slot: "title", innerHTML: this.titulo }), h("ion-button", { "ds-name": "tertiary", slot: "right", onClick: () => this.dismiss() }, h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))), h("ion-content", { class: "zoom-content" }, h("ion-slides", { ref: (el) => { this.slider = el; el.options = this.sliderOpts; }, pager: this.imagens && this.imagens.length > 1 }, this.imagens.map((img) => h("ion-slide", null, h("span", { class: "marca-agua-superior" }, this.marcaAguaSuperior), h("div", { class: "swiper-zoom-container" }, h("img", { class: "zoom-imagem", src: img === null || img === void 0 ? void 0 : img.src }), h("div", { class: "zoom-legenda-container" }, h("div", { class: "zoom-legenda", innerHTML: img === null || img === void 0 ? void 0 : img.legenda })))))), h("span", { class: "marca-agua-inferior" }, this.marcaAguaInferior)), h("div", { class: "zoom-button-container" }, h("button", { class: "zoom-button", onClick: () => this.zoom(true) }, h("ion-icon", { class: "med-icon", name: "med-mais" })), h("button", { class: "zoom-button", onClick: () => this.zoom(false) }, h("ion-icon", { class: "med-icon", name: "med-menos" })), h("button", { class: "zoom-button zoom-button--close", onClick: () => this.dismiss() }, h("ion-icon", { class: "med-icon", name: "med-fechar" })))));
  }
};
MedImageZoom.style = medImageZoomCss;

export { MedImageZoom as med_image_zoom };
