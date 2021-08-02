import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedChartRadialContent {
  constructor() {
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
    const { total } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-chart-radial-content': true,
      }, null) },
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
        "text": ""
      },
      "attribute": "total",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
  static get watchers() { return [{
      "propName": "total",
      "methodName": "collapsedChanged"
    }]; }
}
