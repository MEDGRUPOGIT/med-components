import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedVote {
  render() {
    const { titulo, cabe, naoCabe } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-vote': true,
      }, null) },
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__icon-container" },
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }),
          h("div", { class: "med-vote__badge med-vote__badge--cabe" }, cabe ? cabe : '0')),
        h("h3", { class: "med-vote__heading", innerHTML: titulo }),
        h("div", { class: "med-vote__icon-container" },
          h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, naoCabe ? naoCabe : '0'),
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))),
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__chart med-vote__chart--cabe" }),
        h("div", { class: "med-vote__chart med-vote__chart--nao-cabe" }))));
  }
  static get is() { return "med-vote"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-vote.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-vote.css"]
  }; }
  static get properties() { return {
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
        "text": "Define o conte\u00FAdo de texto do componente."
      },
      "attribute": "titulo",
      "reflect": false
    },
    "cabe": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o conte\u00FAdo de texto do componente."
      },
      "attribute": "cabe",
      "reflect": false
    },
    "naoCabe": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o conte\u00FAdo de texto do componente."
      },
      "attribute": "nao-cabe",
      "reflect": false
    }
  }; }
}
