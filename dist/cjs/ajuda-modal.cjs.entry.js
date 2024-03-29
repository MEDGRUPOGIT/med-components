/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const ajudaModalCss = ".sc-ajuda-modal-h{display:block;border-radius:0}.header.sc-ajuda-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:hsl(var(--med-color-neutral-1));padding-top:calc(28px + var(--ion-safe-area-top));padding-right:40px;padding-bottom:28px;padding-left:40px;max-height:80px}@media (max-width: 575.98px){.header.sc-ajuda-modal{padding-top:calc(24px + var(--ion-safe-area-top));padding-right:24px;padding-bottom:24px;padding-left:24px;max-height:72px}}.header__left.sc-ajuda-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-content.sc-ajuda-modal{height:calc(100% - 80px)}@media (max-width: 575.98px){.modal-content.sc-ajuda-modal{height:calc(100% - 72px)}}.modal-ajuda.sc-ajuda-modal{height:100%;padding:40px 64px}@media (max-width: 575.98px){.modal-ajuda.sc-ajuda-modal{padding:24px}}.modal-ajuda__title.sc-ajuda-modal{margin-bottom:40px;display:block;font-weight:600;font-size:24px;line-height:32px}@media (max-width: 575.98px){.modal-ajuda__title.sc-ajuda-modal{margin-bottom:24px}}.modal-ajuda__slides.sc-ajuda-modal{height:calc(100% - 72px)}@media (max-width: 575.98px){.modal-ajuda__slides.sc-ajuda-modal{height:calc(100% - 56px)}}@media only screen and (max-height: 500px){.modal-ajuda__slides.sc-ajuda-modal{height:auto;overflow:auto}}.modal-ajuda__slide.sc-ajuda-modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal-ajuda__icon.sc-ajuda-modal{min-width:100px;min-height:100px;stroke:hsl(var(--med-color-neutral-10));fill:transparent;margin-bottom:24px}.modal-ajuda__subtitle.sc-ajuda-modal{font-weight:600;font-size:24px;line-height:32px;margin-bottom:16px}.modal-ajuda__text.sc-ajuda-modal{font-weight:400;font-size:14px;line-height:20px}";

const AjudaModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "header" }, index.h("div", { class: "header__left" }, index.h("div", null, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { class: "med-icon", name: "med-fechar" }))))), index.h("ion-content", { class: "modal-content" }, index.h("div", { class: "modal-ajuda" }, index.h("ion-label", { class: "modal-ajuda__title" }, "Realizar simulado"), index.h("ion-slides", { class: "modal-ajuda__slides", pager: true }, index.h("ion-slide", { class: "modal-ajuda__slide" }, index.h("ion-icon", { class: "modal-ajuda__icon", name: "med-montaprovas" }), index.h("ion-label", { class: "modal-ajuda__subtitle", "ds-color": "neutral-10" }, "Modo Prova"), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "O objetivo \u00E9 que voc\u00EA experimente o simulado como se estivesse na \u00E9poca em que ele aconteceu."), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "Um cron\u00F4metro regressivo informa a voc\u00EA quanto tempo falta para o fim do simulado."), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "Ao final, voc\u00EA pode comparar o seu resultado com os resultados de todos os que fizeram a prova, na \u00E9poca em que ela aconteceu."), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "Fa\u00E7a e refa\u00E7a este simulado, quantas vezes desejar.")), index.h("ion-slide", { class: "modal-ajuda__slide" }, index.h("ion-icon", { class: "modal-ajuda__icon", name: "med-faculdade" }), index.h("ion-label", { class: "modal-ajuda__subtitle", "ds-color": "neutral-10" }, "Modo Estudo"), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "Voc\u00EA realiza as quest\u00F5es do simulado, sem tempo."), index.h("ion-label", { class: "modal-ajuda__text", "ds-color": "neutral-10" }, "A cada quest\u00E3o respondida, voc\u00EA pode conferir seu gabarito, ver as estat\u00EDsticas de resposta dos outros alunos e estudar os coment\u00E1rios dos professores.")))))));
  }
};
AjudaModal.style = ajudaModalCss;

exports.ajuda_modal = AjudaModal;
