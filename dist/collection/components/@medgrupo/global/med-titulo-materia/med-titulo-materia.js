import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedTituloMateria {
  render() {
    const { color, neutral, titulo, descricao } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-titulo-materia': true,
      }, neutral) },
      h("slot", { name: "start" }),
      h("div", { class: "med-titulo-materia__content" },
        h("h3", { class: "med-titulo-materia__titulo" }, titulo),
        h("p", { class: "med-titulo-materia__descricao" }, descricao)),
      h("slot", { name: "end" })));
  }
  static get is() { return "med-titulo-materia"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-titulo-materia.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-titulo-materia.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
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
      "attribute": "color",
      "reflect": false
    },
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor neutra do componente."
      },
      "attribute": "neutral",
      "reflect": false
    },
    "titulo": {
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
        "text": "Define o titulo do item."
      },
      "attribute": "titulo",
      "reflect": false
    },
    "descricao": {
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
        "text": "Define o descricao do item."
      },
      "attribute": "descricao",
      "reflect": false
    }
  }; }
}
