import { Component, h, Host, Prop } from "@stencil/core";
import { MedFontSize } from "../../../../@templarios/templarios";
export class MedFontZoom {
  constructor() {
    /**
     * todo
     */
    this.value = MedFontSize.XS;
    this.min = 1;
    this.max = 5;
    this.step = 1;
    this.fontSizeToValue = (fontSize) => {
      switch (fontSize) {
        case MedFontSize.XXXS:
          return 1;
        case MedFontSize.XXS:
          return 2;
        case MedFontSize.XS:
          return 3;
        case MedFontSize.SM:
          return 4;
        case MedFontSize.MD:
          return 5;
      }
    };
    this.onRangeChange = (rangeValue) => {
      if (this.emitter) {
        switch (rangeValue) {
          case 1:
            this.value = MedFontSize.XXXS;
            break;
          case 2:
            this.value = MedFontSize.XXS;
            break;
          case 3:
            this.value = MedFontSize.XS;
            break;
          case 4:
            this.value = MedFontSize.SM;
            break;
          case 5:
            this.value = MedFontSize.MD;
            break;
          default:
            this.value = MedFontSize.XS;
        }
        this.emitter.emit(this.value);
      }
    };
  }
  render() {
    return (h(Host, { "from-stencil": true },
      h("ion-range", { onIonChange: (ev) => this.onRangeChange(ev.detail.value), min: this.min, max: this.max, step: this.step, value: this.fontSizeToValue(this.value) },
        h("ion-icon", { class: "med-icon", slot: "start", name: "med-fontemenor" }),
        h("ion-icon", { class: "med-icon", slot: "end", name: "med-fontemaior" }))));
  }
  static get is() { return "med-font-zoom"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-font-zoom.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-font-zoom.css"]
  }; }
  static get properties() { return {
    "emitter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ emit: (value: MedFontSize) => void }",
        "resolved": "{ emit: (value: MedFontSize) => void; }",
        "references": {
          "MedFontSize": {
            "location": "import",
            "path": "../../../../@templarios/templarios"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      }
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "MedFontSize",
        "resolved": "MedFontSize.MD | MedFontSize.SM | MedFontSize.XS | MedFontSize.XXS | MedFontSize.XXXS",
        "references": {
          "MedFontSize": {
            "location": "import",
            "path": "../../../../@templarios/templarios"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "MedFontSize.XS"
    }
  }; }
}
