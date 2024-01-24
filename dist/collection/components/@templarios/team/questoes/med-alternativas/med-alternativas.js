/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { MedSkin } from '../../../../../@templarios/templarios';
export class MedAlternativas {
  constructor() {
    this.dsColor = undefined;
    this.alternativas = [];
    this.dsSkinConfig = undefined;
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
  }
  render() {
    const { dsSkinConfig, dsColor, alternativas, keyAlternativa, keyEnunciado, keyImagem, keyPorcentagem, keyRiscada, respostaCorreta, mostraResposta, alternativaSelecionada, permiteRiscar, permiteDesmarcar } = this;
    return (h(Host, { "from-stencil": true }, dsSkinConfig.alternativas === MedSkin.A && (h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar })), dsSkinConfig.alternativas === MedSkin.B && (h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar }))));
  }
  static get is() { return "med-alternativas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-alternativas.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-alternativas.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "todo"
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
}
