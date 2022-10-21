import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedVideoThumbnail {
  constructor() {
    /**
     * todo
     */
    this.value = 0;
  }
  render() {
    const { dsColor, url, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-video-thumbnail': true
      }) },
      h("img", { class: "med-video-thumbnail__img", src: url }),
      h("ion-icon", { class: "med-icon med-icon--lg med-video-thumbnail__icon", name: "med-play" }),
      h("ion-progress-bar", { "ds-color": dsColor, class: "med-video-thumbnail__progress", "ds-name": "minimalist", value: value })));
  }
  static get is() { return "med-video-thumbnail"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-video-thumbnail.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-video-thumbnail.css"]
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
    "url": {
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
      "attribute": "url",
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
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
}
