import { Component, Host, h, Prop, Element } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
import { hostContext } from '../../../../utils/theme';
export class MedAulaProfessor {
  constructor() {
    /**
      * TO DO
      */
    this.active = false;
  }
  render() {
    const { dsColor, icon, titulo, professores, videos, value, active } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-aula-professor': true,
        'med-aula-professor--active': active,
        'in-accordion': hostContext('med-accordion-item', this.el),
      }) },
      h("div", { class: "med-aula-professor__base" },
        h("div", { class: "med-aula-professor__container" },
          h("ion-icon", { class: "med-aula-professor__icon med-icon", name: icon }),
          h("div", { class: "med-aula-professor__middle" },
            h("med-type", { token: "p16b" }, titulo),
            h("med-type", { class: "med-aula-professor__caption", token: "p14" },
              professores,
              " Professor, ",
              videos,
              " V\u00EDdeos"),
            h("med-type", { token: "p10" },
              value * 100,
              "% Conclu\u00EDdo")),
          h("div", { class: "med-aula-professor__end" },
            h("slot", null))),
        h("ion-progress-bar", { "ds-name": "minimalist", "ds-color": dsColor, value: value }))));
  }
  static get is() { return "med-aula-professor"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-aula-professor.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-aula-professor.css"]
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
    "active": {
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
        "text": "TO DO"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TO DO"
      },
      "attribute": "icon",
      "reflect": true
    },
    "titulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TO DO"
      },
      "attribute": "titulo",
      "reflect": true
    },
    "professores": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TO DO"
      },
      "attribute": "professores",
      "reflect": true
    },
    "videos": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TO DO"
      },
      "attribute": "videos",
      "reflect": true
    },
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TO DO"
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
