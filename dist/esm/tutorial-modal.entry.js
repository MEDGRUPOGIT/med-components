import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const tutorialModalCss = ".sc-tutorial-modal-h{display:block;border-radius:0}.modal-content.sc-tutorial-modal{height:calc(100% - 136px);padding:16px}.tutorial.sc-tutorial-modal{height:100%;padding:16px}.tutorial__slides.sc-tutorial-modal{height:100%}.tutorial__slide.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.tutorial__image.sc-tutorial-modal{margin-bottom:16px}.tutorial__text.sc-tutorial-modal{display:block;font-weight:600;font-size:20px;line-height:20px;text-align:center;margin-bottom:32px}.modal-footer.sc-tutorial-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px}@media only screen and (max-height: 500px){.tutorial__slides.sc-tutorial-modal{height:auto;overflow:auto}}";

const TutorialModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("med-header", null, h("med-navbar", { class: "header", slot: "navbar" }, h("ion-button", { slot: "right", mode: "ios", fill: "clear", "ds-size": "xs", "no-padding": "true" }, "Pular tutorial"))), h("ion-content", { class: "modal-content" }, h("div", { class: "tutorial" }, h("ion-slides", { class: "tutorial", pager: true }, h("ion-slide", { class: "tutorial__slide" }, h("img", { class: "tutorial__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "tutorial__text", "ds-color": "neutral-10" }, "Como e onde postar sua d\u00FAvida em uma QUEST\u00C3O.")), h("ion-slide", { class: "tutorial__slide" }, h("img", { class: "tutorial__image", src: "https://via.placeholder.com/500" }), h("ion-label", { class: "tutorial__text", "ds-color": "neutral-10" }, "Como ver as d\u00FAvidas de uma QUEST\u00C3O."))))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "ENTENDI"))));
  }
};
TutorialModal.style = tutorialModalCss;

export { TutorialModal as tutorial_modal };