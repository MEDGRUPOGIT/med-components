import { Component, Host, h, Prop, Event } from '@stencil/core';
export class MedAlternativas {
  constructor() {
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
  }
  cssClassAlternativa(alternativa) {
    let classe = 'alternativa';
    if (this.mostraResposta && this.alternativaSelecionada) {
      if (alternativa === this.respostaCorreta) {
        classe += ' alternativa--correta';
      }
      else if (alternativa === this.alternativaSelecionada) {
        classe += ' alternativa--incorreto';
      }
    }
    return classe;
  }
  respostaAlterada(alternativa) {
    this.alternativaSelecionada = alternativa;
    let objAlternativa;
    for (const item of this.alternativas) {
      if (item[this.keyAlternativa] === alternativa) {
        objAlternativa = item;
        break;
      }
    }
    this.medChange.emit(objAlternativa);
  }
  imageRequest(alternativa) {
    this.medGalleryRequest.emit(alternativa);
  }
  render() {
    let hasImage = false;
    for (const alternativa of this.alternativas) {
      if (alternativa[this.keyImagem]) {
        hasImage = true;
        break;
      }
    }
    return (h(Host, { "from-stencil": true },
      h("ion-radio-group", { onIonChange: ev => this.respostaAlterada(ev.detail.value), value: this.alternativaSelecionada },
        h("ul", { class: `alternativas ${hasImage ? 'alternativas--imagem' : ''}` }, this.alternativas.map((alternativa) => (h("li", { class: this.cssClassAlternativa(alternativa[this.keyAlternativa]) },
          h("med-option", { class: 'alternativa__option' },
            h("ion-radio", { value: alternativa[this.keyAlternativa] }),
            h("label", { slot: "label" }, alternativa[this.keyAlternativa])),
          h("div", { class: 'alternativa__right' },
            alternativa[this.keyEnunciado] && h("div", { class: 'alternativa__text', innerHTML: alternativa[this.keyEnunciado] }),
            h("div", { class: 'image-container', onClick: () => this.imageRequest(alternativa) },
              alternativa[this.keyImagem] && h("img", { class: 'alternativa__image', src: alternativa[this.keyImagem] }),
              h("div", { class: 'overlay' },
                h("div", { class: "overlay__content" },
                  h("p", { class: "overlay__label" }, "clique para ampliar"),
                  h("ion-icon", { name: "med-expand" })))),
            h("ion-progress-bar", { percentage: true, class: `
                    ion-progress-bar
                    ${this.mostraResposta && this.alternativaSelecionada ? 'ion-progress-bar--toggle' : ''}
                    ${alternativa[this.keyPorcentagem] === 1 ? 'ion-progress-bar--100' : ''}`, value: alternativa[this.keyPorcentagem] })))))))));
  }
  static get is() { return "med-alternativas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-alternativas.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-alternativas.css"]
  }; }
  static get properties() { return {
    "alternativas": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "MedAlternativaInterface | any",
        "resolved": "any",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "./med-alternativas-interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alternativas",
      "reflect": false,
      "defaultValue": "[]"
    },
    "keyAlternativa": {
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
        "text": ""
      },
      "attribute": "key-alternativa",
      "reflect": false,
      "defaultValue": "'Alternativa'"
    },
    "keyEnunciado": {
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
        "text": ""
      },
      "attribute": "key-enunciado",
      "reflect": false,
      "defaultValue": "'Enunciado'"
    },
    "keyImagem": {
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
        "text": ""
      },
      "attribute": "key-imagem",
      "reflect": false,
      "defaultValue": "'Imagem'"
    },
    "keyPorcentagem": {
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
        "text": ""
      },
      "attribute": "key-porcentagem",
      "reflect": false,
      "defaultValue": "'Porcentagem'"
    },
    "respostaCorreta": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "resposta-correta",
      "reflect": true
    },
    "mostraResposta": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mostra-resposta",
      "reflect": true
    },
    "alternativaSelecionada": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alternativa-selecionada",
      "reflect": true
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
        "text": ""
      },
      "complexType": {
        "original": "MedAlternativaInterface",
        "resolved": "MedAlternativaInterface",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "./med-alternativas-interface"
          }
        }
      }
    }, {
      "method": "medGalleryRequest",
      "name": "medGalleryRequest",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MedAlternativaInterface",
        "resolved": "MedAlternativaInterface",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "./med-alternativas-interface"
          }
        }
      }
    }]; }
}
