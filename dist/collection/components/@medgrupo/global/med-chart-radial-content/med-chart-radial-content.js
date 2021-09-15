import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedChartRadialContent {
  constructor() {
    /**
     * TODO
     */
    this.total = 0;
  }
  componentDidRender() {
    this.fontResize();
  }
  collapsedChanged() {
    this.fontResize();
  }
  fontResize() {
    if (this.total.toString().length >= 6) {
      return 'med-chart-radial-content__number--small';
    }
    return '';
  }
  render() {
    const { total, dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial-content': true,
      }) },
      h("span", { class: "med-chart-radial-content__label" }, "Total de"),
      h("span", { class: `med-chart-radial-content__number ${this.fontResize()}` }, total),
      h("span", { class: "med-chart-radial-content__label" }, "Quest\u00F5es")));
  }
  static get is() { return "med-chart-radial-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-radial-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-radial-content.css"]
  }; }
  static get properties() { return {
    "total": {
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
      "attribute": "total",
      "reflect": true,
      "defaultValue": "0"
    },
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
    }
  }; }
  static get watchers() { return [{
      "propName": "total",
      "methodName": "collapsedChanged"
    }]; }
}
