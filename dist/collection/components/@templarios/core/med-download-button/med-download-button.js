import { Component, Event, h, Host, Prop, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedDownloadButton {
  constructor() {
    /**
     * todo
     */
    this.value = 0;
    /**
     * todo
     */
    this.initial = true;
    /**
     * todo
     */
    this.downloading = false;
    /**
     * todo
     */
    this.downloaded = false;
    /**
     * todo
     */
    this.disabled = false;
  }
  downloadedChanged() {
    this.medDownloaded.emit({
      downloaded: this.downloaded,
      id: this.identification,
      index: this.index
    });
  }
  downloadingChange() {
    this.medDownloading.emit({
      downloading: this.downloading,
      id: this.identification,
      index: this.index
    });
  }
  valueChanged() {
    if (this.value !== 0 && this.value !== 100) {
      this.initial = false;
      this.downloaded = false;
      this.downloading = true;
    }
    if (this.value === 0) {
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
    }
    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;
    }
  }
  toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (this.downloaded) {
      this.medDownloaded.emit({
        downloaded: this.downloaded,
        id: this.identification,
        index: this.index
      });
    }
    else if (this.initial) {
      this.initial = false;
      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;
      }
      else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;
        this.medDownloaded.emit({
          downloaded: this.downloaded,
          id: this.identification,
          index: this.index
        });
      }
    }
    else {
      this.medCancelar.emit({
        id: this.identification,
        index: this.index
      });
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
      this.value = 0;
    }
  }
  render() {
    const { dsColor, value, initial, downloading, downloaded } = this;
    return (h(Host, { onClick: (event) => { this.toggle(event); }, class: generateMedColor(dsColor, {
        'med-download-button': true,
        'med-download-button--downloading': downloading && !initial,
        'med-download-button--downloaded': downloaded
      }) },
      h("div", { class: "med-download-button__icon" },
        h("svg", { viewBox: "0 0 36 36", class: "med-download-button__svg" },
          h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle" }),
          h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle med-download-button__circle--value", style: { '--value': `${value}` } })))));
  }
  static get is() { return "med-download-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-download-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-download-button.css"]
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
    },
    "initial": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "initial",
      "reflect": true,
      "defaultValue": "true"
    },
    "downloading": {
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
      "attribute": "downloading",
      "reflect": true,
      "defaultValue": "false"
    },
    "downloaded": {
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
      "attribute": "downloaded",
      "reflect": true,
      "defaultValue": "false"
    },
    "index": {
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
        "text": "todo"
      },
      "attribute": "index",
      "reflect": true
    },
    "identification": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string|number|undefined",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "identification",
      "reflect": true
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "medDownloaded",
      "name": "medDownloaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "medCancelar",
      "name": "medCancelar",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "medDownloading",
      "name": "medDownloading",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "downloaded",
      "methodName": "downloadedChanged"
    }, {
      "propName": "downloading",
      "methodName": "downloadingChange"
    }, {
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
