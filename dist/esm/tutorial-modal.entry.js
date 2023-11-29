/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const tutorialModalCss = ".sc-tutorial-modal-h{display:block;border-radius:0}.header.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-tutorial-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__right.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-tutorial-modal{height:calc(100% - 176px)}@media (max-width: 575.98px){.modal-content.sc-tutorial-modal{height:calc(100% - 168px)}}.modal-tutorial.sc-tutorial-modal{height:100%;padding:8px}.modal-tutorial__slides.sc-tutorial-modal{height:calc(100% - 20px)}.modal-tutorial__slide.sc-tutorial-modal{height:95%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal-tutorial__image.sc-tutorial-modal{margin-bottom:8px;max-height:calc(100% - 28px)}.modal-tutorial__text.sc-tutorial-modal{display:block;font-weight:600;font-size:20px;line-height:20px;text-align:center}.modal-footer.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:24px}";

const TutorialModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" })))), h("div", { class: "header__right" }, h("div", null, h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial")))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-tutorial" }, h("ion-slides", { class: "modal-tutorial__slides", pager: true }, h("ion-slide", { class: "modal-tutorial__slide" }, h("img", { class: "modal-tutorial__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "modal-tutorial__text", "ds-color": "neutral-10" }, "Como e onde postar sua d\u00FAvida em uma QUEST\u00C3O.")), h("ion-slide", { class: "modal-tutorial__slide" }, h("img", { class: "modal-tutorial__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "modal-tutorial__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
};
TutorialModal.style = tutorialModalCss;

export { TutorialModal as tutorial_modal };
