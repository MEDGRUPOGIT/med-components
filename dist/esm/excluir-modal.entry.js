import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const excluirModalCss = ".sc-excluir-modal-h{display:block;border-radius:0}.modal-content.sc-excluir-modal{height:calc(100% - 136px);overflow:auto;border-top:1px solid hsl(var(--med-color-neutral-4))}.excluir.sc-excluir-modal{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.excluir__text.sc-excluir-modal{font-weight:600;font-size:16px;line-height:24px}.modal-footer.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:16px;border-top:1px solid hsl(var(--med-color-neutral-4))}.modal-footer__button.sc-excluir-modal:not(:last-child){margin-right:16px}";

const ExcluirModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("med-header", null, h("med-navbar", { class: "header", slot: "navbar" }, h("ion-label", { class: "header__title", slot: "title" }, "Excluir Postagem"))), h("ion-content", { class: "modal-content" }, h("div", { class: "excluir" }, h("ion-label", { class: "excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"))), h("ion-footer", { class: "modal-footer" }, h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"), h("ion-button", { class: "modal-footer__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))));
  }
};
ExcluirModal.style = excluirModalCss;

export { ExcluirModal as excluir_modal };