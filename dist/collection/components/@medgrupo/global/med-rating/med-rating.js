import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedRating {
  constructor() {
    /**
    * Define o estado cabe ou não cabe recurso.
    */
    this.cabe = false;
  }
  render() {
    const { dsColor, dsName, nome, data, concurso, texto, cabe } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-rating': true,
        'med-rating--cabe': cabe,
        'med-rating--nao-cabe': !cabe,
        [`med-rating--${dsName}`]: dsName !== undefined,
      }) },
      h("div", { class: "med-rating__left" },
        h("ion-icon", { name: cabe ? "med-positivo" : "med-negativo", class: "med-icon med-rating__icon" })),
      h("div", { class: "med-rating__right" },
        h("span", { class: "med-rating__name" }, nome),
        " ",
        h("span", { class: "med-rating__date" }, data),
        h("p", { class: "med-rating__concurso" }, concurso),
        h("span", { class: "med-rating__text" }, texto),
        (dsName === 'medgrupo') && h("ion-icon", { name: "med-logo", class: "med-icon med-rating__icon-medgrupo" }))));
  }
  static get is() { return "med-rating"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-rating.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-rating.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'medgrupo' | 'banca'",
        "resolved": "\"banca\" | \"medgrupo\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": false
    },
    "nome": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o nome do aluno."
      },
      "attribute": "nome",
      "reflect": false
    },
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a data da postagem."
      },
      "attribute": "data",
      "reflect": false
    },
    "concurso": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o nome do concurso."
      },
      "attribute": "concurso",
      "reflect": false
    },
    "texto": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o conte\u00FAdo de texto."
      },
      "attribute": "texto",
      "reflect": false
    },
    "cabe": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o estado cabe ou n\u00E3o cabe recurso."
      },
      "attribute": "cabe",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
