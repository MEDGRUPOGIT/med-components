import { Component, Host, h, Prop, Event, State, Element, Listen, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../../utils/med-theme';
import { distanciaEuclidiana, getPositionFromEvent } from '../../../../../utils/medgrupo';
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
    this.distanciaMinimaClick = 50;
    this.tempoLongPress = 1000;
  }
  handleClick(event) {
    if (!event.target.classList.contains('med-alternativas')) {
      this.resetState();
    }
  }
  onAlternativasChanged(newValue, oldValue) {
    if (newValue != oldValue) {
      this.resetState();
    }
  }
  resetState() {
    this.riscarAtivoIndice = -1;
    this.permiteAlterar = true;
  }
  onTouchStart(event, indice) {
    var _a;
    if ((_a = event.target.closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    this.dataStart = new Date();
    this.positionStart = getPositionFromEvent(event);
    this.timer = setTimeout(() => {
      this.dataEnd = new Date();
      const tempoTotal = this.dataEnd.getTime() - this.dataStart.getTime();
      if (tempoTotal >= this.tempoLongPress) {
        this.riscarAtivoIndice = indice;
        this.permiteAlterar = false;
      }
    }, this.tempoLongPress);
  }
  onTouchEnd(event, alternativa) {
    var _a;
    if ((_a = event.target.closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    const positionEnd = getPositionFromEvent(event);
    clearTimeout(this.timer);
    if (this.permiteAlterar &&
      distanciaEuclidiana(this.positionStart, positionEnd) <
        this.distanciaMinimaClick) {
      this.riscarAtivoIndice = -1;
      this.alterarAlternativa(alternativa);
    }
    this.permiteAlterar = true;
  }
  alterarAlternativa(item) {
    const alternativa = item;
    if (alternativa.Riscada && this.permiteRiscar) {
      return;
    }
    this.alternativaSelecionada = alternativa.Alternativa;
    this.medChange.emit(alternativa);
  }
  riscar(event, alternativa) {
    event.stopPropagation();
    alternativa[this.keyRiscada] = !alternativa[this.keyRiscada];
    this.riscarAtivoIndice = -1;
    this.medRiscada.emit(alternativa);
    this.permiteAlterar = true;
    this.alternativas = [...this.alternativas];
  }
  imageRequest(event, alternativa) {
    event.stopPropagation();
    this.medGalleryRequest.emit(alternativa);
  }
  render() {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeee');
    const { dsColor, permiteRiscar, mostraResposta, alternativaSelecionada } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-alternativas': true,
      }) },
      h("div", { class: "med-alternativas__list", role: "list" }, this.alternativas.map((alternativa, indice) => (h("div", { role: "listitem", onTouchStart: (event) => this.onTouchStart(event, indice), onTouchEnd: (event) => this.onTouchEnd(event, alternativa), onMouseDown: (event) => this.onTouchStart(event, indice), onMouseUp: (event) => this.onTouchEnd(event, alternativa), class: `
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
              h("div", { class: `image-container ${alternativa[this.keyEnunciado] ? 'image-container--margin' : ''}`, onClick: (event) => this.imageRequest(event, alternativa) },
                h("div", { class: 'image-container__wrapper' },
                  h("img", { class: 'image-container__image', src: alternativa[this.keyImagem] }),
                  h("div", { class: 'image-container__button' },
                    h("ion-icon", { name: "med-expand image-container__icon" }))))),
            h("div", { class: `med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar ? 'med-alternativas__riscar--show' : ''}`, onClick: (event) => this.riscar(event, alternativa) }, (alternativa[this.keyRiscada] ? 'Retomar' : 'Riscar') + ' alternativa'))),
        h("ion-progress-bar", { "ds-name": "skin", percentage: true, class: `
                med-alternativas__progress-bar
                ${mostraResposta && alternativaSelecionada ? 'med-alternativas__progress-bar--toggle' : ''}
              `, value: alternativa[this.keyPorcentagem] })))))));
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
