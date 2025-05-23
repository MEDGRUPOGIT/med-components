/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const overlays = require('./overlays-20fa7e5b.js');
const platform = require('./platform-df0a78a3.js');
require('./ionic-global-b146ab44.js');
require('./hardware-back-button-bef7bb33.js');
require('./helpers-a2cc981d.js');

const medImageZoomCss = ".sc-med-image-zoom-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;background-color:hsl(var(--med-color-neutral-1))}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom{position:fixed;width:100%;z-index:1;top:0}.sc-med-image-zoom-h .zoom-header__title.sc-med-image-zoom{color:hsl(var(--med-color-neutral-10));font-size:16px;line-height:100%;font-weight:600}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom .med-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-content.sc-med-image-zoom{--background:hsl(var(--med-color-neutral-1));height:100%;overflow-y:hidden}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom{--bullet-background-active:hsl(var(--med-color-brand-3));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100%}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom .swiper-pagination-bullet-active.sc-med-image-zoom{border:2px solid hsl(var(--med-color-brand-3))}.sc-med-image-zoom-h .swiper-zoom-container.sc-med-image-zoom{-ms-flex-direction:column;flex-direction:column}.sc-med-image-zoom-h .zoom-imagem.sc-med-image-zoom{width:auto;max-width:calc(100% - 50px);height:auto;max-height:calc(100% - 100px);-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;padding-top:48px}.sc-med-image-zoom-h .swiper-slide-zoomed.sc-med-image-zoom .zoom-legenda-container.sc-med-image-zoom{display:none !important}.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;text-align:justify}@media (max-width: 992px){.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;padding-right:70px;text-align:justify}}.sc-med-image-zoom-h .zoom-legenda.sc-med-image-zoom{display:inline-block;color:hsl(var(--med-color-neutral-10));font-size:14px;max-width:992px;overflow-y:auto;max-height:60px}.sc-med-image-zoom-h .marca-agua-superior.sc-med-image-zoom{position:absolute;top:29%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.01;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .marca-agua-inferior.sc-med-image-zoom{position:absolute;top:52%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.02;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .zoom-button-container.sc-med-image-zoom{position:fixed;bottom:48px;right:15px;width:48px}.sc-med-image-zoom-h .zoom-button-container--will-change.sc-med-image-zoom{-webkit-transform:translateZ(0);transform:translateZ(0);will-change:transform}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom{width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;background-color:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom ion-icon.sc-med-image-zoom{font-size:24px;stroke:hsl(var(--med-color-neutral-1))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom:not(:last-child){margin-bottom:16px}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom{background-color:hsl(var(--med-color-neutral-2))}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom ion-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}";

const MedImageZoom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.aplicandoZoom = false;
    this.imagens = [];
    this.marcaAguaSuperior = undefined;
    this.marcaAguaInferior = undefined;
    this.titulo = undefined;
    this.initialSlide = 0;
    this.maxRatioDesktop = 2;
    this.maxRatioMobile = 4;
    this.slider = undefined;
    this.sliderOpts = undefined;
  }
  componentWillLoad() {
    const isDesktop = platform.isPlatform('desktop');
    this.sliderOpts = this.getSliderOpts(isDesktop ? +this.maxRatioDesktop : +this.maxRatioMobile);
  }
  componentDidLoad() {
    this.updateZoomButton();
  }
  updateZoomButton() {
    const zoomButtonContainer = this.host.querySelector('.zoom-button-container');
    if (zoomButtonContainer) {
      zoomButtonContainer.classList.add('zoom-button-container--will-change');
    }
  }
  getSliderOpts(maxRatio) {
    const sliderOpts = {
      zoom: {
        maxRatio,
      },
      initialSlide: this.initialSlide,
    };
    return sliderOpts;
  }
  async zoomOut() {
    const zoom = this.slider.swiper.zoom;
    zoom.out();
  }
  async zoomIn() {
    const zoom = this.slider.swiper.zoom;
    zoom.in();
  }
  dismiss() {
    overlays.modalController.dismiss();
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("med-header", { class: "zoom-header" }, index.h("med-navbar", { slot: "navbar", "ds-name": "transparent", "ds-theme": "light" }, index.h("span", { slot: "title", innerHTML: this.titulo }), index.h("ion-button", { mode: "ios", fill: "clear", slot: "right", "icon-only": true, onClick: () => this.dismiss() }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))), index.h("ion-content", { class: "zoom-content" }, index.h("ion-slides", { ref: (el) => {
        this.slider = el;
      }, options: this.sliderOpts, pager: this.imagens && this.imagens.length > 1 }, this.imagens.map((img) => (index.h("ion-slide", null, index.h("span", { class: "marca-agua-superior" }, this.marcaAguaSuperior), index.h("div", { class: "swiper-zoom-container" }, index.h("img", { class: "zoom-imagem", src: img === null || img === void 0 ? void 0 : img.src }), index.h("div", { class: "zoom-legenda-container" }, index.h("div", { class: "zoom-legenda", innerHTML: img === null || img === void 0 ? void 0 : img.legenda }))))))), index.h("span", { class: "marca-agua-inferior" }, this.marcaAguaInferior)), index.h("div", { class: "zoom-button-container" }, index.h("button", { class: "zoom-button", onClick: () => this.zoomIn() }, index.h("ion-icon", { class: "med-icon", name: "med-mais" })), index.h("button", { class: "zoom-button", onClick: () => this.zoomOut() }, index.h("ion-icon", { class: "med-icon", name: "med-menos" })))));
  }
  get host() { return index.getElement(this); }
};
MedImageZoom.style = medImageZoomCss;

exports.med_image_zoom = MedImageZoom;
