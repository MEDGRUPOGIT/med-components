import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const ajudaModalCss = ".sc-ajuda-modal-h{display:block;border-radius:0}.modal-content.sc-ajuda-modal{height:calc(100% - 56px)}.ajuda.sc-ajuda-modal{height:100%;padding:16px}.ajuda__slides.sc-ajuda-modal{height:100%}.ajuda__slide.sc-ajuda-modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.ajuda__icon.sc-ajuda-modal{min-width:100px;min-height:100px;stroke:hsl(var(--med-color-neutral-10));fill:transparent;margin-bottom:24px}.ajuda__subtitle.sc-ajuda-modal{font-weight:600;font-size:24px;line-height:32px;margin-bottom:16px}.ajuda__text.sc-ajuda-modal{font-weight:400;font-size:14px;line-height:20px}@media only screen and (max-height: 500px){.ajuda__slides.sc-ajuda-modal{height:auto;overflow:auto}}";

const AjudaModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("med-header", null, h("med-navbar", { class: "header", slot: "navbar" }, h("ion-back-button", { slot: "left", mode: "ios", text: "", "ds-size": "xxs" }, h("ion-icon", { class: "med-icon", name: "med-esquerda" })), h("ion-label", { class: "header__title", slot: "title" }, "Realizar simulado"))), h("ion-content", { class: "modal-content" }, h("div", { class: "ajuda" }, h("ion-slides", { class: "ajuda__slides", pager: true }, h("ion-slide", { class: "ajuda__slide" }, h("ion-icon", { class: "ajuda__icon", name: "med-montaprovas" }), h("ion-label", { class: "ajuda__subtitle", "ds-color": "neutral-10" }, "Modo Prova"), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "O objetivo \u00E9 que voc\u00EA experimente o simulado como se estivesse na \u00E9poca em que ele aconteceu."), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "Um cron\u00F4metro regressivo informa a voc\u00EA quanto tempo falta para o fim do simulado."), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "Ao final, voc\u00EA pode comparar o seu resultado com os resultados de todos os que fizeram a prova, na \u00E9poca em que ela aconteceu."), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "Fa\u00E7a e refa\u00E7a este simulado, quantas vezes desejar.")), h("ion-slide", { class: "ajuda__slide" }, h("ion-icon", { class: "ajuda__icon", name: "med-faculdade" }), h("ion-label", { class: "ajuda__subtitle", "ds-color": "neutral-10" }, "Modo Estudo"), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "Voc\u00EA realiza as quest\u00F5es do simulado, sem tempo."), h("ion-label", { class: "ajuda__text", "ds-color": "neutral-10" }, "A cada quest\u00E3o respondida, voc\u00EA pode conferir seu gabarito, ver as estat\u00EDsticas de resposta dos outros alunos e estudar os coment\u00E1rios dos professores.")))))));
  }
};
AjudaModal.style = ajudaModalCss;

export { AjudaModal as ajuda_modal };
