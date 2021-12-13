import { Component, Host, h, Prop, Element } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
/**
 * @slot  Slot default.
 */
export class MedChartBar {
  constructor() {
    // private labelElement?: any;
    this.labelElementHeight = 0;
    /**
      * Define a valor do componente.
      */
    this.value = 0;
    /**
      * Define o height em px do componente.
      */
    this.height = 50;
    /**
      * Define o width em px do componente.
      */
    this.width = 24;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    if (this.labelResizeObserver) {
      this.labelResizeObserver.disconnect();
    }
  }
  setSize() {
    this.labelResizeObserver = new ResizeObserver(() => {
      var _a;
      let newLabelHeight = Number((_a = this.el) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
      if (newLabelHeight !== this.labelElementHeight) {
        this.labelElementHeight = newLabelHeight;
        //console.log(this.labelElementHeight);
      }
    });
    this.labelResizeObserver.observe(this.el);
  }
  render() {
    const { dsColor, value, height, width } = this;
    const { labelElementHeight } = this;
    console.log(labelElementHeight);
    const percentage = value === 0 ? height : height - ((height * value) / 100);
    return (h(Host, { class: generateMedColor(dsColor, { 'med-chart-bar': true }), style: { '--value': `${percentage}`, '--height': `${height}`, '--width': `${width}` } },
      h("div", { class: "med-chart-bar__container" },
        h("div", { class: "med-chart-bar__label" },
          h("slot", null)),
        h("div", { class: "med-chart-bar__progress" }))));
  }
  static get is() { return "med-chart-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-bar.css"]
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
        "text": "Define a valor do componente."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    },
    "height": {
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
        "text": "Define o height em px do componente."
      },
      "attribute": "height",
      "reflect": true,
      "defaultValue": "50"
    },
    "width": {
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
        "text": "Define o width em px do componente."
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "24"
    }
  }; }
  static get elementRef() { return "el"; }
}
