import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const textAreaModalCss = ".sc-text-area-modal-h{display:block;border-radius:0}.modal-content.sc-text-area-modal{border-top:1px solid hsl(var(--med-color-neutral-4))}.text-area.sc-text-area-modal{height:calc(100% - 56px);padding:16px}.text-area.sc-text-area-modal ion-textarea.sc-text-area-modal{--height:100%}.text-area__campo.sc-text-area-modal{height:100%}";

const TextAreaModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("med-header", null, h("med-navbar", { class: "header", slot: "navbar" }, h("ion-back-button", { slot: "left", mode: "ios", text: "", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" })), h("ion-label", { class: "header__title", slot: "title" }, "Depositar d\u00FAvida"), h("ion-button", { slot: "right", mode: "ios", fill: "clear", "icon-only": true, "ds-size": "xs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-enviar" })))), h("ion-content", { class: "modal-content" }, h("div", { class: "text-area" }, h("ion-textarea", { class: "text-area__campo", mode: "md", placeholder: "Escreva a sua d\u00FAvida" })))));
  }
};
TextAreaModal.style = textAreaModalCss;

export { TextAreaModal as text_area_modal };
