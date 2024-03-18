/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../../@templarios/utilities/color';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
export class MedAlternativasA {
  constructor() {
    this.baseClass = new MedAlternativasBase(this);
    this.dsSkin = undefined;
    this.dsSkinConfig = undefined;
    this.dsColor = undefined;
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
    this.keyRiscada = 'Riscada';
    this.respostaCorreta = undefined;
    this.mostraResposta = undefined;
    this.alternativaSelecionada = undefined;
    this.permiteRiscar = true;
    this.permiteDesmarcar = false;
    this.blockMouseEvents = false;
    this.permiteAlterar = true;
    this.riscarAtivoIndice = -1;
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
    let hasImage = false;
    if (this.alternativas) {
      this.alternativas.forEach((element) => {
        if (element.Imagem)
          hasImage = true;
      });
    }
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-alternativas': true
      }) }, h("div", { class: `
           med-alternativas__list
           ${hasImage ? 'med-alternativas__list--has-image' : ''}
           `, role: 'list' }, this.alternativas.map((alternativa, indice) => (h("div", { role: 'listitem', onTouchStart: (event) => this.baseClass.onTouchStart(event, indice), onTouchEnd: (event) => this.baseClass.onTouchEnd(event, alternativa), onMouseDown: (event) => this.baseClass.onTouchStart(event, indice), onMouseUp: (event) => this.baseClass.onTouchEnd(event, alternativa), class: `
                med-alternativas__item med-alternativas__item--${alternativa[this.keyAlternativa]}
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${indice === this.riscarAtivoIndice && permiteRiscar
        ? 'med-alternativas__item--show'
        : ''}
                ${alternativa[this.keyRiscada] && permiteRiscar
        ? 'med-alternativas__item--riscado'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta === this.alternativaSelecionada
        ? 'med-alternativas__item--correta'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta !== this.alternativaSelecionada
        ? 'med-alternativas__item--certa'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] !== this.respostaCorreta &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--incorreta'
        : ''}
                ${!exibeAcerto &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--selecionada'
        : ''}
              ` }, h("div", { class: 'med-alternativas__wrapper' }, h("div", { class: 'med-alternativas__container' }, h("div", { class: 'med-alternativas__left' }, h("div", { class: 'option' }, h("span", { class: 'option__fake' }), h("span", { class: 'option__letter' }, alternativa[this.keyAlternativa]))), h("div", { class: 'med-alternativas__right' }, h("span", { class: 'med-alternativas__span', innerHTML: alternativa[this.keyEnunciado] }), alternativa[this.keyImagem] && (h("div", { class: `image-container ${alternativa[this.keyEnunciado]
        ? 'image-container--margin'
        : ''}`, onClick: (event) => this.baseClass.imageRequest(event, alternativa) }, h("div", { class: 'image-container__wrapper' }, h("img", { class: 'image-container__image', src: alternativa[this.keyImagem] })))), h("med-chart-bar-horizontal", { label: true, class: `
                      med-alternativas__progress-bar
                      ${mostraResposta && alternativaSelecionada
        ? 'med-alternativas__progress-bar--toggle'
        : ''}
                    `, value: Math.round(alternativa[this.keyPorcentagem] * 100) })), h("div", { class: `med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar
        ? 'med-alternativas__riscar--show'
        : ''}`, onClick: (event) => {
        this.baseClass.riscar(event, alternativa);
      } }, h("ion-icon", { class: 'med-alternativas__riscar-icon med-icon', name: 'med-riscar' }), h("div", { class: 'med-alternativas__riscar-span' }, alternativa[this.keyRiscada] ? 'Restaurar ' : 'Riscar ', h("span", { class: 'med-alternativas__riscar-desktop' }, ' ', "alternativa")))))))))));
  }
  static get is() { return "med-alternativas-a"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-alternativas-a.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-alternativas-a.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
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
          "text": "todo"
        },
        "attribute": "ds-skin-config",
        "reflect": false
      },
      "dsColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MedColor",
          "resolved": "string | undefined",
          "references": {
            "MedColor": {
              "location": "import",
              "path": "../../../../../@templarios/types/color.type"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "attribute": "ds-color",
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
              "path": "../../../../../@templarios/interfaces/alternativas.interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
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
          "text": "todo"
        },
        "attribute": "permite-riscar",
        "reflect": false,
        "defaultValue": "true"
      },
      "permiteDesmarcar": {
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
          "text": "todo"
        },
        "attribute": "permite-desmarcar",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "blockMouseEvents": {},
      "permiteAlterar": {},
      "riscarAtivoIndice": {}
    };
  }
  static get events() {
    return [{
        "method": "medChange",
        "name": "medChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "todo"
        },
        "complexType": {
          "original": "MedAlternativaInterface",
          "resolved": "MedAlternativaInterface",
          "references": {
            "MedAlternativaInterface": {
              "location": "import",
              "path": "../../../../../@templarios/interfaces/alternativas.interface"
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
          "text": "todo"
        },
        "complexType": {
          "original": "MedAlternativaInterface",
          "resolved": "MedAlternativaInterface",
          "references": {
            "MedAlternativaInterface": {
              "location": "import",
              "path": "../../../../../@templarios/interfaces/alternativas.interface"
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
          "text": "todo"
        },
        "complexType": {
          "original": "MedAlternativaInterface",
          "resolved": "MedAlternativaInterface",
          "references": {
            "MedAlternativaInterface": {
              "location": "import",
              "path": "../../../../../@templarios/interfaces/alternativas.interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "alternativas",
        "methodName": "onAlternativasChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "handleClick",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
