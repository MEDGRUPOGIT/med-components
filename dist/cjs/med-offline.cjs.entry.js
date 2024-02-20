/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medOfflineCss = ".sc-med-offline-h{--z-index:1000;--padding-y:0 24px;display:block;width:100vw;height:100vh;position:fixed;z-index:var(--z-index)}.sc-med-offline-h .wrapper.sc-med-offline{background:hsl(var(--med-color-neutral-1));position:fixed;width:100%;height:100%;top:0px}.sc-med-offline-h .wrapper__content.sc-med-offline{pointer-events:none;width:100%;height:calc(100% - 48px - 72px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;padding:var(--padding-y)}.sc-med-offline-h .wrapper__icon.sc-med-offline{width:48px;height:48px;margin-bottom:24px;stroke:hsl(var(--med-color-neutral-3));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}.sc-med-offline-h .title.sc-med-offline{font-size:24px;font-weight:700;line-height:100%;color:hsl(var(--med-color-neutral-10));margin-top:24px;margin-bottom:24px;padding:var(--padding-y)}.sc-med-offline-h .subtitle.sc-med-offline{font-size:16px;font-weight:700;line-height:100%;color:hsl(var(--med-color-neutral-10));margin-bottom:8px;text-align:center}.sc-med-offline-h .text.sc-med-offline{font-size:16px;font-weight:400;line-height:100%;color:hsl(var(--med-color-neutral-10));text-align:center}";

const MedOffline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
    this.titulo = 'Página Indisponível';
    this.subtitulo = 'Você está offline';
    this.texto = 'Conecte-se à internet para visualizar esse conteúdo';
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    const { titulo, subtitulo, texto } = this;
    return (index.h(index.Host, { "from-stencil": true }, index.h("div", { class: "wrapper" }, index.h("med-header", null, index.h("med-navbar", { "ds-name": "transparent", slot: "navbar" }, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xs", slot: "left", onClick: () => this.onClick() }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-esquerda" })))), index.h("h1", { class: "title" }, titulo), index.h("div", { class: "wrapper__content" }, index.h("ion-icon", { class: "med-icon med-icon--lg wrapper__icon", name: "med-offline2" }), index.h("p", { class: "subtitle" }, subtitulo), index.h("p", { class: "text" }, texto)))));
  }
};
MedOffline.style = medOfflineCss;

exports.med_offline = MedOffline;
