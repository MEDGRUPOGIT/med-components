import { Component, Host, h, Prop, Event } from '@stencil/core';
import { MedSkin } from '../../../../../global/templarios/skin.enum';
export class MedAlternativas {
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
  }
  render() {
    const { dsSkinConfig, dsColor, alternativas, keyAlternativa, keyEnunciado, keyImagem, keyPorcentagem, keyRiscada, respostaCorreta, mostraResposta, alternativaSelecionada, permiteRiscar } = this;
    return (h(Host, { "from-stencil": true },
      dsSkinConfig.alternativas === MedSkin.A && h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: ev => this.medRiscada.emit(ev.detail), onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) }),
      dsSkinConfig.alternativas === MedSkin.B && h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: ev => this.medRiscada.emit(ev.detail), onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) })));
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
    "alternativas": {
      "type": "any",
      "mutable": true,
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
        "text": "TODO"
      },
      "attribute": "alternativas",
      "reflect": false,
      "defaultValue": "[]"
    },
    "dsSkinConfig": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "attribute": "ds-skin-config",
      "reflect": false
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
            "path": "./med-alternativas-interface"
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
        "text": "TODO"
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
