'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const theme = require('./theme-21d701cc.js');

const medMessageCss = ":host{--color:hsl(var(--med-color-neutral-10));--background:hsl(var(--med-color-neutral-2));--background-footer:hsl(var(--med-color-neutral-3))}:host(.med-message){width:100%;max-width:1200px;border-radius:var(--med-border-radius-sm);background:var(--background);font-size:var(--med-font-size-xxs);line-height:24px;color:var(--color);display:block;position:relative}:host(.med-message) .med-message__balao{background:hsl(var(--med-color-neutral-2));width:16px;height:8px;position:absolute;top:0;left:-8px;display:none;-webkit-clip-path:polygon(0% 0%, 100% 0%, 100% 99%, 53% 100%, 52% 78%, 51% 60%, 45% 48%, 39% 39%, 32% 35%, 26% 29%, 20% 25%, 12% 22%, 7% 18%, 3% 16%, 0% 1%);clip-path:polygon(0% 0%, 100% 0%, 100% 99%, 53% 100%, 52% 78%, 51% 60%, 45% 48%, 39% 39%, 32% 35%, 26% 29%, 20% 25%, 12% 22%, 7% 18%, 3% 16%, 0% 1%)}:host(.med-message) .med-message__content{padding:var(--med-spacing-inset-sm)}:host(.med-message) .med-message__avatar{font-size:30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-right:var(--med-spacing-inline-xxxs)}:host(.med-message) .med-message__letter{min-width:30px;height:30px;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(.med-message) .med-message__header{padding-bottom:var(--med-spacing-stack-xxxs);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host(.med-message) .med-message__id{text-align:left;width:100%}:host(.med-message) .med-message__nome{margin:0}:host(.med-message) .med-message__number{font-size:var(--med-font-size-xxxs);font-weight:var(--med-font-weight-semibold);line-height:var(--med-line-height-compressed);margin:0}:host(.med-message) .med-message__controls{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-message) .med-message__texto{margin:0;text-align:left}:host(.med-message) .med-message__text{font-size:var(--med-font-size-xxs)}:host(.med-message) .med-message__icon{stroke:hsl(var(--med-color-brand-4))}:host(.med-message) .med-message__tooltip{margin-right:var(--med-spacing-inline-xxxs)}:host(.med-message) .med-message__footer{padding:var(--med-spacing-squish-xs);background:var(--background-footer);border-bottom-left-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm)}:host(.med-message) .med-message__img{border-radius:50%;width:32px;height:32px}:host(.med-message--medgrupo){--background:hsl(var(--med-color-brand-1));--background-footer:hsl(var(--med-color-brand-2))}:host(.med-message--medgrupo) .med-message__balao{display:block;background:hsl(var(--med-color-brand-1))}:host(.med-message--response) .med-message__balao,:host(.med-message--comment) .med-message__balao,:host(.med-message--user-message) .med-message__balao{display:block}:host(.med-message--user-message) .med-message__balao{-webkit-transform:scaleX(-1);transform:scaleX(-1);right:-8px;left:unset}";

const MedMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsName, nome, concurso, texto, messageId } = this;
    return (index.h(index.Host, { "from-stencil": true, class: theme.createColorClasses(null, {
        'med-message': true,
        [`med-message--${dsName}`]: dsName !== undefined,
      }, null) }, index.h("div", { class: "med-message__balao" }), index.h("div", { class: "med-message__content" }, index.h("div", { class: "med-message__header" }, index.h("div", { class: "med-message__avatar" }, dsName !== 'medgrupo' && index.h("slot", { name: "avatar" }), dsName === 'medgrupo' && index.h("img", { class: "med-message__img", src: index.getAssetPath(`./assets/avatar_medgrupo.png`) })), index.h("div", { class: "med-message__id" }, index.h("p", { class: "med-message__nome" }, nome, " - ", concurso), index.h("p", { class: "med-message__number" }, messageId)), index.h("div", { class: "med-message__controls" }, index.h("med-tooltip", { class: "med-message__tooltip", content: "Possui resposta da Equipe Acad\u00EAmica", placement: "top", position: "end" }, index.h("ion-icon", { slot: "icon", class: "med-icon med-message__icon", name: "med-equipe-homologada" })), index.h("slot", { name: "menu" }))), index.h("slot", null), index.h("p", { class: "med-message__texto" }, texto)), index.h("div", { class: "med-message__footer" }, index.h("slot", { name: "footer" }))));
  }
  static get assetsDirs() { return ["assets"]; }
};
MedMessage.style = medMessageCss;

exports.med_message = MedMessage;
