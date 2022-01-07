import { Component, Host, h, Prop, Event } from '@stencil/core';
export class MedThemes {
  temaSelecionado(temaAtivo) {
    this.ativo = temaAtivo;
    this.medChange.emit(this.ativo);
  }
  render() {
    const { temas } = this;
    return (h(Host, { "from-stencil": true },
      h("ion-radio-group", { onIonChange: ev => this.temaSelecionado(ev.detail.value), value: this.ativo }, temas === null || temas === void 0 ? void 0 : temas.map((tema) => (h("div", { class: `med-theme med-theme--${tema.value}` },
        h("div", { class: "med-theme__left" },
          h("div", { class: "med-theme__circle" })),
        h("div", { class: "med-theme__right" },
          h("div", { class: "med-theme__bar" }),
          h("div", { class: "med-theme__bar med-theme__bar--small" }),
          h("div", { class: "med-theme__wrapper" },
            h("ion-radio", { value: tema.value, class: "med-theme__radio" }),
            h("span", { class: "med-theme__name" }, tema.label)))))))));
  }
  static get is() { return "med-themes"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-themes.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-themes.css"]
  }; }
  static get properties() { return {
    "ativo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'theme-gold' | 'theme-recursos'",
        "resolved": "\"theme-gold\" | \"theme-recursos\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ativo",
      "reflect": true
    },
    "temas": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MedTema[]",
        "resolved": "MedTema[] | undefined",
        "references": {
          "MedTema": {
            "location": "import",
            "path": "./med-themes-interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define quais os temas"
      }
    }
  }; }
  static get events() { return [{
      "method": "medChange",
      "name": "medChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Retornar a cor selecionada"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
