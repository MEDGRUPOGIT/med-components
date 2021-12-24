import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedVideoListItem {
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-video-list-item': true,
      }) },
      h("div", { class: "med-video-list-item__text-container" },
        h("ion-icon", { class: "med-icon med-icon--sm", name: "med-play" }),
        h("med-type", { class: "cp-time-stamp__title", token: "p12x", "ds-color": "neutral-9" }, "Taquiarritmias"),
        h("med-type", { token: "p12x", "ds-color": dsColor }, "00:42:25")),
      h("ion-button", { class: "med-video-list-item__avancar", "ds-color": dsColor, "ds-name": "tertiary" },
        h("ion-icon", { class: "med-video-list-item__icon med-icon", slot: "icon-only", name: "med-direita" }))));
  }
  static get is() { return "med-video-list-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-video-list-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-video-list-item.css"]
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
    }
  }; }
}
