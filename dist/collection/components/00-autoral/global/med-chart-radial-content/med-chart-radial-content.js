import { Component, Host, h } from '@stencil/core';
export class MedChartRadialContent {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "med-chart-radial-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-chart-radial-content.css"]
  }; }
  static get styleUrls() { return {
    "$": ["med-chart-radial-content.css"]
  }; }
}
