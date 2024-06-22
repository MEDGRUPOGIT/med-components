/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const overlays = require('./overlays-51bc752f.js');
require('./ionic-global-31ae4345.js');
require('./hardware-back-button-bef7bb33.js');
require('./helpers-a2cc981d.js');

const medConfigCss = ".sc-med-config-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;background-color:var(--med-color-neutral-dark-prime)}.sc-med-config-h .config-header.sc-med-config{position:relative;width:100%;z-index:1;top:0}.sc-med-config-h .config-header__title.sc-med-config{color:var(--med-color-neutral-light-prime);font-size:16px;line-height:100%;font-weight:600}.sc-med-config-h .config-content.sc-med-config{--background:var(--med-color-neutral-dark-prime);height:100%;overflow-y:hidden}";

const MedConfig = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emitter = undefined;
    this.opcoes = undefined;
  }
  dismiss() {
    overlays.modalController.dismiss();
  }
  emitTheme(theme) {
    this.emitter.theme(theme);
  }
  emitScheme(scheme) {
    this.emitter.scheme(scheme.detail.value);
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("med-header", { class: "config-header" }, index.h("med-navbar", { slot: "navbar", "ds-theme": "light" }, index.h("span", { slot: "title" }, "Configura\u00E7\u00F5es"), index.h("ion-button", { mode: "ios", "icon-only": true, "ds-name": "icon-only", slot: "left", onClick: () => this.dismiss() }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))), index.h("ion-content", { class: "config-content" }, index.h("ion-segment", { onIonChange: (ev) => this.emitScheme(ev) }, index.h("ion-segment-button", { value: "scheme-dark" }, index.h("ion-label", null, "Dark")), index.h("ion-segment-button", { value: "scheme-light" }, index.h("ion-label", null, "Light"))), index.h("ion-list", null, index.h("ion-radio-group", null, index.h("ion-item", null, index.h("ion-label", null, "Padr\u00E3o"), index.h("ion-radio", { slot: "start", value: "theme-default", onClick: () => this.emitTheme('theme-default') })), index.h("ion-item", null, index.h("ion-label", null, "Gold"), index.h("ion-radio", { slot: "start", value: "theme-gold", onClick: () => this.emitTheme('theme-gold') })), index.h("ion-item", null, index.h("ion-label", null, "Recurso"), index.h("ion-radio", { slot: "start", value: "theme-recursos", onClick: () => this.emitTheme('theme-recursos') })))))));
  }
};
MedConfig.style = medConfigCss;

exports.med_config = MedConfig;
