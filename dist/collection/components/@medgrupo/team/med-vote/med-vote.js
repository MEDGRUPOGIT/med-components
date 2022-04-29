import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedVote {
  constructor() {
    /**
      * Define o titulo do componente.
      */
    this.titulo = 'Cabe recurso?';
    /**
      * Define a quantidade de recursos que cabem.
      */
    this.like = 0;
    /**
      * Define a quantidade de recursos que não cabem.
      */
    this.unlike = 0;
  }
  render() {
    const titulo = this.titulo;
    const like = isNaN(this.like) ? 0 : +this.like;
    const unlike = isNaN(this.unlike) ? 0 : +this.unlike;
    const total = like + unlike;
    const likePercent = unlike === 0 && like === 0 ? 50 : ((like * 100) / total);
    const unlikePercent = unlike === 0 && like === 0 ? 50 : ((unlike * 100) / total);
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-vote': true,
      }, null) },
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__icon-container" },
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }),
          h("div", { class: "med-vote__badge med-vote__badge--cabe" }, like)),
        h("h3", { class: "med-vote__heading", innerHTML: titulo }),
        h("div", { class: "med-vote__icon-container" },
          h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, unlike),
          h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))),
      h("div", { class: "med-vote__row" },
        h("div", { class: "med-vote__chart med-vote__chart--cabe", style: { width: `${likePercent}%` } }),
        h("div", { class: "med-vote__chart med-vote__chart--nao-cabe", style: { width: `${unlikePercent}%` } }))));
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
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o titulo do componente."
      },
      "attribute": "titulo",
      "reflect": false,
      "defaultValue": "'Cabe recurso?'"
    },
    "like": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define a quantidade de recursos que cabem."
      },
      "attribute": "like",
      "reflect": false,
      "defaultValue": "0"
    },
    "unlike": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define a quantidade de recursos que n\u00E3o cabem."
      },
      "attribute": "unlike",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
}
