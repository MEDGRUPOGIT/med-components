/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { m as modalController } from './overlays-8f8e7296.js';
import './ionic-global-908d8380.js';
import './platform-a3776365.js';
import './hardware-back-button-e98bcc7d.js';
import './helpers-7c8ceac4.js';

const medConfigCss = ".sc-med-config-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;background-color:var(--med-color-neutral-dark-prime)}.sc-med-config-h .config-header.sc-med-config{position:relative;width:100%;z-index:1;top:0}.sc-med-config-h .config-header__title.sc-med-config{color:var(--med-color-neutral-light-prime);font-size:16px;line-height:100%;font-weight:600}.sc-med-config-h .config-content.sc-med-config{--background:var(--med-color-neutral-dark-prime);height:100%;overflow-y:hidden}";

const MedConfig = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitter = undefined;
    this.opcoes = undefined;
  }
  dismiss() {
    modalController.dismiss();
  }
  emitTheme(theme) {
    this.emitter.theme(theme);
  }
  emitScheme(scheme) {
    this.emitter.scheme(scheme.detail.value);
  }
  render() {
    return (h(Host, { "from-stencil": true }, h("med-header", { class: "config-header" }, h("med-navbar", { slot: "navbar", "ds-theme": "light" }, h("span", { slot: "title" }, "Configura\u00E7\u00F5es"), h("ion-button", { mode: "ios", "icon-only": true, "ds-name": "icon-only", slot: "left", onClick: () => this.dismiss() }, h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))), h("ion-content", { class: "config-content" }, h("ion-segment", { onIonChange: (ev) => this.emitScheme(ev) }, h("ion-segment-button", { value: "scheme-dark" }, h("ion-label", null, "Dark")), h("ion-segment-button", { value: "scheme-light" }, h("ion-label", null, "Light"))), h("ion-list", null, h("ion-radio-group", null, h("ion-item", null, h("ion-label", null, "Padr\u00E3o"), h("ion-radio", { slot: "start", value: "theme-default", onClick: () => this.emitTheme('theme-default') })), h("ion-item", null, h("ion-label", null, "Gold"), h("ion-radio", { slot: "start", value: "theme-gold", onClick: () => this.emitTheme('theme-gold') })), h("ion-item", null, h("ion-label", null, "Recurso"), h("ion-radio", { slot: "start", value: "theme-recursos", onClick: () => this.emitTheme('theme-recursos') })))))));
  }
};
MedConfig.style = medConfigCss;

export { MedConfig as med_config };
