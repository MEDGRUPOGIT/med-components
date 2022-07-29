import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedVote {
  constructor() {
    /**
     * todo
     */
    this.titulo = 'Cabe recurso?';
    /**
     * todo
     */
    this.like = 0;
    /**
     * todo
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-vote': true,
      }) },
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
        "text": "todo"
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "unlike",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
}
