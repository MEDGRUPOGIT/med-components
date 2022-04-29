import { Component, Host, h, Prop } from '@stencil/core';
import { modalController } from '../../../../utils/overlays';
export class MedConfig {
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
    return (h(Host, { "from-stencil": true },
      h("med-header", { class: "config-header" },
        h("med-navbar", { slot: "navbar", "ds-theme": "light" },
          h("span", { slot: "title" }, "Configura\u00E7\u00F5es"),
          h("ion-button", { "ds-name": "icon-only", slot: "left", onClick: () => this.dismiss() },
            h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-fechar" })))),
      h("ion-content", { class: "config-content" },
        h("ion-segment", { onIonChange: (ev) => this.emitScheme(ev) },
          h("ion-segment-button", { value: "scheme-dark" },
            h("ion-label", null, "Dark")),
          h("ion-segment-button", { value: "scheme-light" },
            h("ion-label", null, "Light"))),
        h("ion-list", null,
          h("ion-radio-group", null,
            h("ion-item", null,
              h("ion-label", null, "Padr\u00E3o"),
              h("ion-radio", { slot: "start", value: "theme-default", onClick: () => this.emitTheme('theme-default') })),
            h("ion-item", null,
              h("ion-label", null, "Gold"),
              h("ion-radio", { slot: "start", value: "theme-gold", onClick: () => this.emitTheme('theme-gold') })),
            h("ion-item", null,
              h("ion-label", null, "Recurso"),
              h("ion-radio", { slot: "start", value: "theme-recursos", onClick: () => this.emitTheme('theme-recursos') })))))));
  }
  static get is() { return "med-config"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-config.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-config.css"]
  }; }
  static get properties() { return {
    "emitter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\r\n    scheme: ( value: string ) => void;\r\n    theme: ( value: string ) => void;\r\n  }",
        "resolved": "{ scheme: (value: string) => void; theme: (value: string) => void; }",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
      }
    },
    "opcoes": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedConfigInterface",
        "resolved": "MedConfigInterface",
        "references": {
          "MedConfigInterface": {
            "location": "import",
            "path": "./med-config-interface"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
      }
    }
  }; }
}
