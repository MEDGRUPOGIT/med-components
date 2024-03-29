/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const excluirModalCss = ".sc-excluir-modal-h{display:block;border-radius:0}.header.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-excluir-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-excluir-modal{height:calc(100% - 80px)}@media (max-width: 575.98px){.modal-content.sc-excluir-modal{height:calc(100% - 72px)}}.modal-excluir.sc-excluir-modal{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:40px 64px}@media (max-width: 575.98px){.modal-excluir.sc-excluir-modal{padding:24px}}.modal-excluir__title.sc-excluir-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-excluir__title.sc-excluir-modal{margin-bottom:24px}}.modal-excluir__text.sc-excluir-modal{font-weight:400;font-size:16px;line-height:24px}.modal-excluir__button-container.sc-excluir-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:40px}@media (max-width: 575.98px){.modal-excluir__button-container.sc-excluir-modal{margin-top:auto}}.modal-excluir__button.sc-excluir-modal:not(:last-child){margin-right:16px}@media (max-width: 575.98px){.modal-excluir__button.sc-excluir-modal{-ms-flex:1;flex:1}}";

const ExcluirModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-header", { class: "header" }, h("div", { class: "header__left" }, h("div", null, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), h("ion-content", { class: "modal-content" }, h("div", { class: "modal-excluir" }, h("ion-label", { class: "modal-excluir__title" }, "Excluir Postagem"), h("ion-label", { class: "modal-excluir__text" }, "Tem certeza que deseja excluir a postagem selecionada?"), h("div", { class: "modal-excluir__button-container" }, h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm", "ds-color": "neutral-5" }, "CANCELAR"), h("ion-button", { class: "modal-excluir__button", mode: "ios", "ds-size": "sm" }, "CONFIRMAR"))))));
  }
};
ExcluirModal.style = excluirModalCss;

export { ExcluirModal as excluir_modal };
