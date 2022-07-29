import { Component, Element, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
/**
 * @slot  Slot default.
 */
export class MedChartBar {
  constructor() {
    this.hostHeight = 0;
    /**
     * todo
     */
    this.value = 0;
    /**
     * todo
     */
    this.height = 50;
    /**
     * todo
     */
    this.width = 32;
  }
  componentDidLoad() {
    this.setSize();
  }
  disconnectedCallback() {
    if (this.hostResizeObserver) {
      this.hostResizeObserver.disconnect();
    }
  }
  setSize() {
    this.hostResizeObserver = new ResizeObserver(() => {
      var _a;
      let newHostHeight = Number((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
      if (newHostHeight !== this.hostHeight) {
        this.hostHeight = newHostHeight;
      }
    });
    this.hostResizeObserver.observe(this.hostElement);
  }
  render() {
    const { dsColor, value, height, width } = this;
    const percentage = value === 0 ? height - 1 : height - ((height * value) / 100);
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
        "text": "todo"
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
        "text": "todo"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "32"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
