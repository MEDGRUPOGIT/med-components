import { Component, Host, h, Prop, Event, State } from '@stencil/core';
import { createColorClasses } from '../../../../../utils/theme';
export class MedAlternativas {
  constructor() {
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
    this.tempoLongPress = 1000;
  }
  onTouchStart(alternativaPressionada) {
    if (!this.isDesktop) {
      this.dataStart = new Date();
      this.timer = setTimeout(() => {
        this.dataEnd = new Date();
        const tempoTotal = this.dataEnd.getTime() - this.dataStart.getTime();
        if (tempoTotal >= this.tempoLongPress) {
          if (this.permiteRiscar(alternativaPressionada)) {
            for (const alternativa of this.alternativas) {
              if (alternativa.Alternativa != alternativaPressionada.Alternativa) {
                alternativa.Pressionada = false;
              }
            }
            alternativaPressionada.Pressionada = !alternativaPressionada.Pressionada;
            this.alternativaPressionada = { alternativaPressionada };
          }
        }
      }, this.tempoLongPress);
    }
  }
  onTouchEnd() {
    clearTimeout(this.timer);
  }
  cssClassAlternativa(alternativa) {
    this.podeRiscar = true;
    let objAlternativa = this.getAlternativa(alternativa);
    let classe = 'alternativa';
    if (!objAlternativa.Riscada) {
      if (this.mostraResposta && this.alternativaSelecionada) {
        if (alternativa === this.respostaCorreta) {
          classe += ' alternativa--correta';
        }
        else if (alternativa === this.alternativaSelecionada) {
          classe += ' alternativa--incorreto';
        }
      }
    }
    classe += this.getCssClassAlternativaRiscada(objAlternativa);
    return classe;
  }
  cssClassOption(alternativa) {
    let classe = 'alternativa__option';
    if (alternativa.Riscada) {
      classe += ' alternativa__option--riscada';
    }
    return classe;
  }
  getCssClassAlternativaRiscada(objAlternativa) {
    let classe = '';
    if (this.podeRiscar && objAlternativa) {
      if (!this.isDesktop && objAlternativa.Pressionada) {
        classe += ' alternativa--pode-riscar-mobile';
      }
      else if (this.isDesktop) {
        classe += ' alternativa--pode-riscar';
      }
      if (objAlternativa && objAlternativa.Riscada) {
        classe += ' alternativa--riscada';
      }
    }
    return classe;
  }
  respostaAlterada(alternativa) {
    this.alternativaSelecionada = alternativa;
    let objAlternativa = this.getAlternativa(alternativa);
    if (objAlternativa && !objAlternativa.Riscada) {
      this.medChange.emit(objAlternativa);
    }
  }
  imageRequest(alternativa) {
    this.medGalleryRequest.emit(alternativa);
  }
  riscar(alternativa) {
    if (this.permiteRiscar(alternativa)) {
      alternativa.Riscada = !alternativa.Riscada;
      if (alternativa.Alternativa === this.alternativaSelecionada) {
        this.respostaAlterada('');
      }
      this.alternativaRiscada = { alternativa };
      if (!this.isDesktop) {
        alternativa.Pressionada = !alternativa.Pressionada;
      }
    }
  }
  permiteRiscar(alternativa) {
    let countNaoRiscadas = 0;
    for (const alternativa of this.alternativas) {
      countNaoRiscadas += !alternativa.Riscada ? 1 : 0;
    }
    return alternativa.Riscada || (!alternativa.Riscada && countNaoRiscadas > 1);
  }
  getAlternativa(key) {
    let objAlternativa;
    for (const item of this.alternativas) {
      if (item[this.keyAlternativa] === key) {
        objAlternativa = item;
        break;
      }
    }
    return objAlternativa;
  }
  render() {
    let hasImage = false;
    for (const alternativa of this.alternativas) {
      if (alternativa[this.keyImagem]) {
        hasImage = true;
        break;
      }
    }
    const { color } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-alternativas': true,
      }, null) },
      h("ion-radio-group", { onIonChange: ev => this.respostaAlterada(ev.detail.value), value: this.alternativaSelecionada },
        h("ul", { class: `alternativas ${hasImage ? 'alternativas--imagem' : ''}` }, this.alternativas.map((alternativa) => (h("div", { class: "alternativa-wrapper", onPointerDown: () => this.onTouchStart(alternativa), onPointerUp: () => this.onTouchEnd() },
          h("li", { class: this.cssClassAlternativa(alternativa[this.keyAlternativa]) + (alternativa.Pressionada ? ' alternativa--pode-riscar-mobile' : '') },
            h("med-option", { class: this.cssClassOption(alternativa) },
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
              !alternativa.Riscada &&
                h("ion-progress-bar", { percentage: true, class: `
                        ion-progress-bar
                        ${this.mostraResposta && this.alternativaSelecionada ? 'ion-progress-bar--toggle' : ''}
                        ${alternativa[this.keyPorcentagem] === 1 ? 'ion-progress-bar--100' : ''}`, value: alternativa[this.keyPorcentagem] })),
            this.podeRiscar && (alternativa.Pressionada || this.isDesktop) &&
              h("div", { class: "riscar", onClick: () => this.riscar(alternativa) })))))))));
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
    "podeRiscar": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "pode-riscar",
      "reflect": false
    },
    "isDesktop": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "is-desktop",
      "reflect": false
    },
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
    },
    "color": {
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
        "text": "Define a cor neutra do componente."
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
  static get states() { return {
    "alternativaRiscada": {},
    "alternativaPressionada": {}
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
