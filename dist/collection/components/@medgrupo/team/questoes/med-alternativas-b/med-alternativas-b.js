import { Component, Host, h, Prop, Event, State, Element, Listen, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
export class MedAlternativasB {
  constructor() {
    /**
     * TODO
     */
    this.alternativas = [];
    /**
     * TODO
     */
    this.keyAlternativa = 'Alternativa';
    /**
     * TODO
     */
    this.keyEnunciado = 'Enunciado';
    /**
     * TODO
     */
    this.keyImagem = 'Imagem';
    /**
     * TODO
     */
    this.keyPorcentagem = 'Porcentagem';
    /**
     * TODO
     */
    this.keyRiscada = 'Riscada';
    /**
     * TODO
     */
    this.permiteRiscar = true;
    this.permiteAlterar = true;
    this.riscarAtivoIndice = -1;
    this.baseClass = new MedAlternativasBase(this);
  }
  handleClick(event) {
    this.baseClass.handleClick(event);
  }
  onAlternativasChanged(newValue, oldValue) {
    this.baseClass.onAlternativasChanged(newValue, oldValue);
  }
  render() {
    const { dsColor, permiteRiscar, mostraResposta, alternativaSelecionada } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-alternativas': true,
      }) },
      h("div", { class: "med-alternativas__list", role: "list" }, this.alternativas.map((alternativa, indice) => (h("div", { role: "listitem", onTouchStart: (event) => this.baseClass.onTouchStart(event, indice), onTouchEnd: (event) => this.baseClass.onTouchEnd(event, alternativa), onMouseDown: (event) => this.baseClass.onTouchStart(event, indice), onMouseUp: (event) => this.baseClass.onTouchEnd(event, alternativa), class: `
                med-alternativas__item med-alternativas__item--${alternativa[this.keyAlternativa]}
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${alternativa[this.keyRiscada] && permiteRiscar ? 'med-alternativas__item--riscado' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] === this.respostaCorreta && this.respostaCorreta === this.alternativaSelecionada ? 'med-alternativas__item--correta' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] === this.respostaCorreta && this.respostaCorreta !== this.alternativaSelecionada ? 'med-alternativas__item--certa' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] !== this.respostaCorreta && alternativa[this.keyAlternativa] === this.alternativaSelecionada ? 'med-alternativas__item--incorreta' : ''}
                ${!exibeAcerto && alternativa[this.keyAlternativa] === this.alternativaSelecionada ? 'med-alternativas__item--selecionada' : ''}
              ` },
        h("div", { class: "med-alternativas__wrapper" },
          h("div", { class: "med-alternativas__container" },
            h("div", { class: "med-alternativas__left" }, alternativa[this.keyAlternativa]),
            h("div", { class: "med-alternativas__right", innerHTML: alternativa[this.keyEnunciado] }, alternativa[this.keyImagem] &&
              h("div", { class: `image-container ${alternativa[this.keyEnunciado] ? 'image-container--margin' : ''}`, onClick: (event) => this.baseClass.imageRequest(event, alternativa) },
                h("div", { class: 'image-container__wrapper' },
                  h("img", { class: 'image-container__image', src: alternativa[this.keyImagem] }),
                  h("div", { class: 'image-container__button' },
                    h("ion-icon", { class: "med-icon image-container__icon", name: "med-busca" }))))),
            h("div", { class: `med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar ? 'med-alternativas__riscar--show' : ''}`, onClick: (event) => this.baseClass.riscar(event, alternativa) }, (alternativa[this.keyRiscada] ? 'Retomar' : 'Riscar') + ' alternativa'))),
        h("med-chart-bar-horizontal", { label: true, class: `
                med-alternativas__progress-bar
                ${mostraResposta && alternativaSelecionada ? 'med-alternativas__progress-bar--toggle' : ''}
              `, value: Math.round(alternativa[this.keyPorcentagem] * 100) })))))));
  }
  static get is() { return "med-alternativas-b"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-alternativas-b.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-alternativas-b.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "ds-color",
      "reflect": false
    },
    "dsSkin": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "ds-skin",
      "reflect": false
    },
    "dsSkinConfig": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "ds-skin-config",
      "reflect": false
    },
    "alternativas": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "MedAlternativaInterface | any",
        "resolved": "any",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "../med-alternativas/med-alternativas-interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "key-porcentagem",
      "reflect": false,
      "defaultValue": "'Porcentagem'"
    },
    "keyRiscada": {
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
        "text": "TODO"
      },
      "attribute": "key-riscada",
      "reflect": false,
      "defaultValue": "'Riscada'"
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
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "alternativa-selecionada",
      "reflect": true
    },
    "permiteRiscar": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "permite-riscar",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "permiteAlterar": {},
    "riscarAtivoIndice": {}
  }; }
  static get events() { return [{
      "method": "medChange",
      "name": "medChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "complexType": {
        "original": "MedAlternativaInterface",
        "resolved": "MedAlternativaInterface",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "../med-alternativas/med-alternativas-interface"
          }
        }
      }
    }, {
      "method": "medRiscada",
      "name": "medRiscada",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "complexType": {
        "original": "MedAlternativaInterface",
        "resolved": "MedAlternativaInterface",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "../med-alternativas/med-alternativas-interface"
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
        "text": "TODO"
      },
      "complexType": {
        "original": "MedAlternativaInterface",
        "resolved": "MedAlternativaInterface",
        "references": {
          "MedAlternativaInterface": {
            "location": "import",
            "path": "../med-alternativas/med-alternativas-interface"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "alternativas",
      "methodName": "onAlternativasChanged"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
