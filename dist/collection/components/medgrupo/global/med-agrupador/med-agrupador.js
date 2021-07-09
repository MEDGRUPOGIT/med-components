import { Component, Host, h, Prop, State } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedAgrupador {
  constructor() {
    this.toggle = false;
    this.onClick = () => {
      this.toggle = this.toggle ? !this.toggle : !this.toggle;
    };
  }
  render() {
    const { color } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, { 'toggle': this.toggle }), onClick: this.onClick },
      h("div", { class: "toggle__expandir" }, "Expandir a lista"),
      h("div", { class: "toggle__ocultar" }, "Ocultar a lista"),
      h("ion-icon", { class: "toggle__img", name: "med-arrow-down" })));
  }
  static get is() { return "med-agrupador"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-agrupador.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-agrupador.css"]
  }; }
  static get properties() { return {
    "color": {
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
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
  static get states() { return {
    "toggle": {}
  }; }
}
