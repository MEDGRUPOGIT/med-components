import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedRating {
  constructor() {
    /**
     * todo
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
        h("med-type", { class: "med-rating__name" }, nome),
        " ",
        h("med-type", { class: "med-rating__date" }, data),
        h("med-type", { class: "med-rating__concurso" }, concurso),
        h("med-type", { class: "med-rating__text" }, texto),
        (dsName === 'medgrupo') && h("ion-icon", { name: "med-logo", class: "med-icon med-rating__icon-medgrupo" }),
        (dsName === 'banca' && cabe) && h("med-type", { class: "med-rating__banca" }, "RECURSO CONCEDIDO"),
        (dsName === 'banca' && !cabe) && h("med-type", { class: "med-rating__banca" }, "RECURSO N\u00C3O CONCEDIDO"))));
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
            "path": "../../../../@templarios/types/color.type"
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "cabe",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
