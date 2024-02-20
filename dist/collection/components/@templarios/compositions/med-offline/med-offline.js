/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class MedOffline {
  constructor() {
    this.titulo = 'Página Indisponível';
    this.subtitulo = 'Você está offline';
    this.texto = 'Conecte-se à internet para visualizar esse conteúdo';
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    const { titulo, subtitulo, texto } = this;
    return (h(Host, { "from-stencil": true }, h("div", { class: "wrapper" }, h("med-header", null, h("med-navbar", { "ds-name": "transparent", slot: "navbar" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xs", slot: "left", onClick: () => this.onClick() }, h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-esquerda" })))), h("h1", { class: "title" }, titulo), h("div", { class: "wrapper__content" }, h("ion-icon", { class: "med-icon med-icon--lg wrapper__icon", name: "med-offline2" }), h("p", { class: "subtitle" }, subtitulo), h("p", { class: "text" }, texto)))));
  }
  static get is() { return "med-offline"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-offline.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-offline.css"]
    };
  }
  static get properties() {
    return {
      "titulo": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "titulo",
        "reflect": true,
        "defaultValue": "'P\u00E1gina Indispon\u00EDvel'"
      },
      "subtitulo": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "subtitulo",
        "reflect": true,
        "defaultValue": "'Voc\u00EA est\u00E1 offline'"
      },
      "texto": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "texto",
        "reflect": true,
        "defaultValue": "'Conecte-se \u00E0 internet para visualizar esse conte\u00FAdo'"
      }
    };
  }
  static get events() {
    return [{
        "method": "medClick",
        "name": "medClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
}
