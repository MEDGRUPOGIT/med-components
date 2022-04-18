import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../utils/med-theme';
export class MedVideoThumbnail {
  constructor() {
    /**
      * TODO
      */
    this.value = 0;
  }
  render() {
    const { url, value, dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-video-thumbnail': true,
      }) },
      h("img", { class: "med-video-thumbnail__img", src: url }),
      h("ion-icon", { class: "med-icon med-icon--lg med-video-thumbnail__icon", name: "med-play" }),
      h("ion-progress-bar", { "ds-color": dsColor, class: "med-video-thumbnail__progress", "ds-name": "minimalist", value: value })));
  }
  static get is() { return "med-video-thumbnail"; }
  static get encapsulation() { return "shadow"; }
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
            "path": "../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "TODO"
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
        "text": "TODO"
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
        "text": "TODO"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
}
