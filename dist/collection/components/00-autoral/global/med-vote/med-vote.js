import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedVote {
  validarValores(_cabe, _naoCabe) {
    let valueCabe = _cabe >= 0 && _cabe !== undefined && _cabe !== null ? _cabe : 0;
    let valueNaoCabe = _naoCabe >= 0 && _naoCabe !== undefined && _naoCabe !== null ? _naoCabe : 0;
    return { valueCabe, valueNaoCabe };
  }
  render() {
    const { titulo, cabe, naoCabe } = this;
    const { valueCabe, valueNaoCabe } = this.validarValores(cabe, naoCabe);
    const total = valueCabe + valueNaoCabe;
    const cabeP = ((valueCabe * 100) / total);
    const naoCabeP = ((valueNaoCabe * 100) / total);
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-vote': true,
      }, null) },
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__icon-container" },
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }),
          h("div", { class: "med-vote__badge med-vote__badge--cabe" }, valueCabe)),
        h("h3", { class: "med-vote__heading", innerHTML: titulo }),
        h("div", { class: "med-vote__icon-container" },
          h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, valueNaoCabe),
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))),
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__chart med-vote__chart--cabe", style: { width: `${cabeP}%` } }),
        h("div", { class: "med-vote__chart med-vote__chart--nao-cabe", style: { width: `${naoCabeP}%` } }))));
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
